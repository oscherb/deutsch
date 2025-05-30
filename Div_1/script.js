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

    let audioContext;
    let oscillator;

    function playWrongAnswerSound() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime);

        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(1, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();

        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3);
        oscillator.stop(audioContext.currentTime + 0.3);
    }

    const translations = {
        ru: {
            title: "Таблица Деления", // Изменено
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
            title: "Таблиця Ділення", // Изменено
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
            title: "Divisionstabelle", // Изменено
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
            title: "Division Table", // Изменено
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

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // --- Изменения для генерации примера деления ---
    function generateRandomExample() {
        const quotient = getRandomInt(1, 10); // Частное от 1 до 10
        const divisor = getRandomInt(1, 10);  // Делитель от 1 до 10
        const dividend = quotient * divisor; // Делимое = частное * делитель

        return { dividend, divisor, correctAnswer: quotient };
    }
    // --- Конец изменений для генерации примера деления ---


    function generateWrongAnswers(correctAnswer) {
        const wrongAnswers = new Set();
        while (wrongAnswers.size < 4) {
            let wrongAnswer = getRandomInt(correctAnswer - 5, correctAnswer + 5); // Диапазон для неправильных ответов
            // Убедимся, что неправильный ответ не совпадает с правильным, не отрицательный и не равен 0
            if (wrongAnswer !== correctAnswer && wrongAnswer >= 0) { // Для деления 0 может быть ответом, но мы его исключили для частного
                wrongAnswers.add(wrongAnswer);
            }
        }
        return Array.from(wrongAnswers);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

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
        overallStatsDiv.style.display = 'none';

        questionsColumn.innerHTML = '';
        answersColumn.innerHTML = '';
        questionsData = [];

        for (let i = 0; i < NUM_QUESTIONS; i++) {
            // --- Изменения в использовании сгенерированных чисел ---
            const { dividend, divisor, correctAnswer } = generateRandomExample();
            const wrongAnswers = generateWrongAnswers(correctAnswer);
            const allAnswers = shuffleArray([correctAnswer, ...wrongAnswers]);

            questionsData.push({
                question: `${dividend} ÷ ${divisor}`, // Формат примера деления
                correctAnswer: correctAnswer,
                answers: allAnswers,
                solved: false,
                timeTaken: null,
                questionStartTime: null,
                elementRefs: {}
            });
            // --- Конец изменений ---

            const questionItemDiv = document.createElement('div');
            questionItemDiv.classList.add('question-item');
            questionItemDiv.dataset.index = i;

            const questionBtn = document.createElement('button');
            questionBtn.classList.add('question-btn');
            questionBtn.innerHTML = `<span class="hidden-text">? ÷ ?</span>`; // Обновлено
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

    function deactivateQuestion(index) {
        const qData = questionsData[index];
        if (qData.solved) return;

        qData.elementRefs.questionBtn.classList.remove('active');
        qData.elementRefs.answerBtns.forEach(btn => {
            btn.classList.remove('active', 'incorrect', 'correct-answer');
            btn.style.pointerEvents = 'none';
        });
    }

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

            playWrongAnswerSound();

            setTimeout(() => {
                answerBtn.classList.remove('incorrect');
            }, 500);
        }
    }

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

    restartBtn.addEventListener('click', initializeGame);

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