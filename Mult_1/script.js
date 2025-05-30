document.addEventListener('DOMContentLoaded', () => {
    const questionsColumn = document.getElementById('questions-column');
    const answersColumn = document.getElementById('answers-column');
    const correctScoreSpan = document.getElementById('correct-score');
    const incorrectScoreSpan = document.getElementById('incorrect-score');
    const restartBtn = document.getElementById('restart-btn');
    const langSelect = document.getElementById('lang-select');
    const overallStatsDiv = document.getElementById('overall-stats');
    const totalTimeSpan = document.getElementById('total-time');
    const totalAttemptsSpan = document.getElementById('total-attempts');
    const solvedCountSpan = document.getElementById('solved-count');

    const NUM_QUESTIONS = 15;

    let correctScore = 0;
    let incorrectScore = 0;
    let solvedQuestions = 0;
    let totalAttempts = 0;
    let startTimeOverall;
    let currentQuestionIndex = null;
    let questionsData = []; // Для хранения данных о вопросах и их состоянии

    // --- Изменения для звука ---
    let audioContext;
    let oscillator;

    function playWrongAnswerSound() {
        // Создаем AudioContext при первом воспроизведении или пользовательском действии
        // Это нужно, чтобы обойти ограничения браузеров на автовоспроизведение
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        // Создаем осциллятор (генератор волны)
        oscillator = audioContext.createOscillator();
        oscillator.type = 'sine'; // Тип волны: синусоида (может быть 'square', 'sawtooth', 'triangle')
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime); // Низкая частота (150 Гц)

        // Создаем GainNode (регулятор громкости) для контроля затухания
        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(1, audioContext.currentTime); // Начальная громкость

        // Подключаем осциллятор к GainNode, а GainNode к выходу аудио контекста
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Начинаем воспроизведение
        oscillator.start();

        // Быстро затухаем звук
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3); // Затухание за 0.3 секунды
        oscillator.stop(audioContext.currentTime + 0.3); // Останавливаем осциллятор через 0.3 секунды
    }
    // --- Конец изменений для звука ---


    const translations = {
        ru: {
            title: "Таблица Умножения",
            restart: "Перезапустить",
            correct: "Правильно",
            incorrect: "Неправильно",
            overallTime: "Общее время:",
            totalAttempts: "Всего попыток:",
            solvedQuestions: "Решено примеров:",
            ru: "Русский",
            uk: "Українська",
            de: "Deutsch",
            en: "English"
        },
        uk: {
            title: "Таблиця Множення",
            restart: "Перезапустити",
            correct: "Правильно",
            incorrect: "Неправильно",
            overallTime: "Загальний час:",
            totalAttempts: "Всього спроб:",
            solvedQuestions: "Вирішено прикладів:",
            ru: "Російська",
            uk: "Українська",
            de: "Німецька",
            en: "Англійська"
        },
        de: {
            title: "Multiplikationstabelle",
            restart: "Neustarten",
            correct: "Richtig",
            incorrect: "Falsch",
            overallTime: "Gesamtzeit:",
            totalAttempts: "Gesamtversuche:",
            solvedQuestions: "Gelöste Beispiele:",
            ru: "Russisch",
            uk: "Ukrainisch",
            de: "Deutsch",
            en: "Englisch"
        },
        en: {
            title: "Multiplication Table",
            restart: "Restart",
            correct: "Correct",
            incorrect: "Incorrect",
            overallTime: "Overall Time:",
            totalAttempts: "Total Attempts:",
            solvedQuestions: "Solved Questions:",
            ru: "Russian",
            uk: "Ukrainian",
            de: "German",
            en: "English"
        }
    };

    // Функция для получения случайного числа от min до max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Функция для генерации случайных чисел для примеров
    function generateRandomExample() {
        const num1 = getRandomInt(1, 12);
        const num2 = getRandomInt(0, 10);
        const correctAnswer = num1 * num2;
        return { num1, num2, correctAnswer };
    }

    // Функция для генерации 4 неправильных ответов
    function generateWrongAnswers(correctAnswer) {
        const wrongAnswers = new Set();
        while (wrongAnswers.size < 4) {
            let wrongAnswer = getRandomInt(correctAnswer - 10, correctAnswer + 10);
            if (wrongAnswer !== correctAnswer && wrongAnswer >= 0) {
                wrongAnswers.add(wrongAnswer);
            }
        }
        return Array.from(wrongAnswers);
    }

    // Функция для перемешивания массива
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Функция для инициализации или перезапуска игры
    function initializeGame() {
        correctScore = 0;
        incorrectScore = 0;
        solvedQuestions = 0;
        totalAttempts = 0;
        startTimeOverall = Date.now();
        currentQuestionIndex = null;

        correctScoreSpan.textContent = correctScore;
        incorrectScoreSpan.textContent = incorrectScore;
        solvedCountSpan.textContent = solvedQuestions;
        overallStatsDiv.style.display = 'none'; // Скрыть статистику в начале

        questionsColumn.innerHTML = '';
        answersColumn.innerHTML = '';
        questionsData = [];

        for (let i = 0; i < NUM_QUESTIONS; i++) {
            const { num1, num2, correctAnswer } = generateRandomExample();
            const wrongAnswers = generateWrongAnswers(correctAnswer);
            const allAnswers = shuffleArray([correctAnswer, ...wrongAnswers]);

            questionsData.push({
                question: `${num1} × ${num2}`,
                correctAnswer: correctAnswer,
                answers: allAnswers,
                solved: false,
                timeTaken: null,
                questionStartTime: null,
                elementRefs: {}
            });

            const questionItemDiv = document.createElement('div');
            questionItemDiv.classList.add('question-item');
            questionItemDiv.dataset.index = i;

            const questionBtn = document.createElement('button');
            questionBtn.classList.add('question-btn');
            questionBtn.innerHTML = `<span class="hidden-text">? × ?</span>`;
            questionBtn.dataset.index = i;
            questionBtn.onclick = () => activateQuestion(i);

            const timeTakenSpan = document.createElement('span');
            timeTakenSpan.classList.add('time-taken');
            timeTakenSpan.textContent = ' ';

            questionItemDiv.appendChild(questionBtn);
            questionItemDiv.appendChild(timeTakenSpan);
            questionsColumn.appendChild(questionItemDiv);

            const answerRowDiv = document.createElement('div');
            answerRowDiv.classList.add('answer-row');
            answerRowDiv.dataset.index = i;

            allAnswers.forEach((answer, ansIndex) => {
                const answerBtn = document.createElement('button');
                answerBtn.classList.add('answer-btn');
                answerBtn.innerHTML = `<span class="hidden-text">?</span>`;
                answerBtn.dataset.answer = answer;
                answerBtn.dataset.index = i;
                answerBtn.style.pointerEvents = 'none';
                answerBtn.onclick = () => handleAnswerClick(i, answer, answerBtn);
                answerRowDiv.appendChild(answerBtn);
            });
            answersColumn.appendChild(answerRowDiv);

            questionsData[i].elementRefs.questionBtn = questionBtn;
            questionsData[i].elementRefs.timeTakenSpan = timeTakenSpan;
            questionsData[i].elementRefs.answerBtns = Array.from(answerRowDiv.children);
        }
    }

    // Активация вопроса
    function activateQuestion(index) {
        if (questionsData[index].solved) return;

        if (currentQuestionIndex !== null && currentQuestionIndex !== index) {
            deactivateQuestion(currentQuestionIndex);
        }

        currentQuestionIndex = index;
        const qData = questionsData[index];

        qData.elementRefs.questionBtn.innerHTML = qData.question;
        qData.elementRefs.questionBtn.classList.add('active');

        qData.elementRefs.answerBtns.forEach(btn => {
            btn.innerHTML = btn.dataset.answer;
            btn.classList.add('active');
            btn.classList.remove('inactive', 'incorrect', 'correct-answer');
            btn.style.pointerEvents = 'auto';
        });

        qData.questionStartTime = Date.now();
    }

    // Деактивация вопроса и сброс стилей
    function deactivateQuestion(index) {
        const qData = questionsData[index];
        if (qData.solved) return;

        qData.elementRefs.questionBtn.classList.remove('active');
        qData.elementRefs.answerBtns.forEach(btn => {
            btn.classList.remove('active', 'incorrect', 'correct-answer');
            btn.style.pointerEvents = 'none';
        });
    }

    // Обработка клика по ответу
    function handleAnswerClick(qIndex, selectedAnswer, answerBtn) {
        if (qIndex !== currentQuestionIndex || questionsData[qIndex].solved) return;

        totalAttempts++;
        totalAttemptsSpan.textContent = totalAttempts;

        const qData = questionsData[qIndex];
        const questionEndTime = Date.now();
        const timeElapsed = ((questionEndTime - qData.questionStartTime) / 1000).toFixed(1);

        if (parseInt(selectedAnswer) === qData.correctAnswer) {
            correctScore++;
            correctScoreSpan.textContent = correctScore;
            solvedQuestions++;
            solvedCountSpan.textContent = solvedQuestions;

            qData.solved = true;
            qData.timeTaken = timeElapsed;
            qData.elementRefs.timeTakenSpan.textContent = `${qData.timeTaken}с`;

            answerBtn.classList.add('correct-answer');
            qData.elementRefs.questionBtn.classList.add('correct-solved');
            qData.elementRefs.questionBtn.classList.add('inactive');
            qData.elementRefs.questionBtn.onclick = null;

            qData.elementRefs.answerBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('inactive');
                btn.style.pointerEvents = 'none';
            });

            currentQuestionIndex = null;

            checkGameEnd();
        } else {
            incorrectScore++;
            incorrectScoreSpan.textContent = incorrectScore;
            answerBtn.classList.add('incorrect');

            playWrongAnswerSound(); // Воспроизводим сгенерированный звук

            setTimeout(() => {
                answerBtn.classList.remove('incorrect');
            }, 500);
        }
    }

    // Проверка окончания игры
    function checkGameEnd() {
        if (solvedQuestions === NUM_QUESTIONS) {
            const totalTime = ((Date.now() - startTimeOverall) / 1000).toFixed(1);
            totalTimeSpan.textContent = totalTime;
            totalAttemptsSpan.textContent = totalAttempts;
            overallStatsDiv.style.display = 'block';

            questionsData.forEach(qData => {
                qData.elementRefs.questionBtn.classList.add('inactive');
                qData.elementRefs.questionBtn.onclick = null;
                qData.elementRefs.answerBtns.forEach(btn => {
                    btn.classList.add('inactive');
                    btn.style.pointerEvents = 'none';
                });
            });
        }
    }

    // Перезапуск игры
    restartBtn.addEventListener('click', initializeGame);

    // Переключение языка
    langSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    function setLanguage(lang) {
        document.querySelector('title').textContent = translations[lang].title;
        document.getElementById('restart-btn').textContent = translations[lang].restart;
        document.getElementById('correct-score').previousSibling.textContent = translations[lang].correct + ": ";
        document.getElementById('incorrect-score').previousSibling.textContent = translations[lang].incorrect + ": ";
        document.getElementById('total-time').previousSibling.textContent = translations[lang].overallTime + " ";
        document.getElementById('total-attempts').previousSibling.textContent = translations[lang].totalAttempts + " ";
        document.getElementById('solved-count').previousSibling.textContent = translations[lang].solvedQuestions + " ";

        langSelect.querySelector('option[value="ru"]').textContent = translations[lang].ru;
        langSelect.querySelector('option[value="uk"]').textContent = translations[lang].uk;
        langSelect.querySelector('option[value="de"]').textContent = translations[lang].de;
        langSelect.querySelector('option[value="en"]').textContent = translations[lang].en;
    }

    initializeGame();
    setLanguage('ru');
});