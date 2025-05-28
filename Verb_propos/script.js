// script.js

// Список всех возможных предлогов для генерации неправильных вариантов
const allPrepositions = [
    "an", "auf", "aus", "bei", "bis", "durch", "für", "gegen", "hinter",
    "in", "mit", "nach", "neben", "ohne", "seit", "über", "um",
    "unter", "von", "vor", "zu"
];

let vocabulary = []; // Теперь это пустой массив, будет загружен из JSON
let currentWordIndex = 0;
let currentWord = {};
let answerGiven = false;

// Элементы DOM (остаются без изменений)
const verbTextElement = document.getElementById('verb-text');
const verbTranslationHintElement = document.getElementById('verb-translation-hint');
const choiceButtons = [
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3'),
    document.getElementById('choice4')
];
const exampleAreaElement = document.getElementById('example-area');
const germanExampleElement = document.getElementById('german-example');
const showTranslationButtonElement = document.getElementById('show-translation-button');
const russianTranslationElement = document.getElementById('russian-translation');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const currentWordNumberElement = document.getElementById('current-word-number');
const totalWordCountElement = document.getElementById('total-word-count');

// --- НОВЫЙ КОД ДЛЯ ЗАГРУЗКИ JSON ---
async function fetchVocabulary() {
    try {
        const response = await fetch('vocabulary.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        vocabulary = data;
        initializeApp(); // Запускаем приложение после загрузки данных
    } catch (error) {
        console.error("Не удалось загрузить словарь:", error);
        verbTextElement.textContent = "Ошибка загрузки словаря!";
        verbTranslationHintElement.textContent = "Проверьте файл vocabulary.json и консоль браузера.";
        // Можно добавить более явное сообщение об ошибке на странице
        document.querySelector('.trainer-container').innerHTML = `
            <h2 style="color: red;">Ошибка загрузки словаря!</h2>
            <p>Пожалуйста, убедитесь, что файл <strong>vocabulary.json</strong> находится в той же папке, что и <strong>index.html</strong>, и не содержит ошибок.</p>
            <p><small>Детали ошибки: ${error.message}</small></p>`;
    }
}

function initializeApp() {
    if (vocabulary.length === 0) {
        // Эта проверка может быть излишней, если fetchVocabulary уже обработал ошибку,
        // но оставим для надежности, если fetchVocabulary не смог показать ошибку в UI.
        verbTextElement.textContent = "Словарь пуст.";
        choiceButtons.forEach(button => button.disabled = true);
        prevButton.disabled = true;
        nextButton.disabled = true;
        return;
    }
    totalWordCountElement.textContent = vocabulary.length;
    loadWord(currentWordIndex);
}
// --- КОНЕЦ НОВОГО КОДА ---


function generateChoices(correctPreposition) {
    let choices = [correctPreposition];
    let tempPrepositions = [...allPrepositions];

    tempPrepositions = tempPrepositions.filter(p => p !== correctPreposition);

    while (choices.length < 4 && tempPrepositions.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempPrepositions.length);
        const randomPreposition = tempPrepositions.splice(randomIndex, 1)[0];
        if (!choices.includes(randomPreposition)) {
            choices.push(randomPreposition);
        }
    }
    while (choices.length < 4) {
        choices.push("---");
    }

    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    return choices;
}

function loadWord(index) {
    answerGiven = false;
    currentWord = vocabulary[index]; // vocabulary теперь глобальная переменная, заполняемая из JSON

    verbTextElement.textContent = currentWord.verb;
    verbTranslationHintElement.textContent = `(Падеж: ${currentWord.case})`;

    const choices = generateChoices(currentWord.preposition);
    choiceButtons.forEach((button, i) => {
        button.textContent = choices[i];
        button.className = 'choice-button';
        button.disabled = false;
    });

    exampleAreaElement.style.display = 'none';
    germanExampleElement.textContent = '';
    russianTranslationElement.textContent = '';
    russianTranslationElement.style.display = 'none';
    showTranslationButtonElement.textContent = 'Показать перевод примера';

    updateNavigationButtons();
    updateProgressInfo();
}

function handleChoice(event) {
    if (answerGiven) return;
    answerGiven = true;

    const selectedButton = event.target;
    const selectedPreposition = selectedButton.textContent;

    choiceButtons.forEach(button => button.disabled = true);

    if (selectedPreposition === currentWord.preposition) {
        selectedButton.classList.add('correct');
        setTimeout(() => {
            germanExampleElement.textContent = currentWord.exampleGerman;
            russianTranslationElement.textContent = currentWord.translationExample;
            exampleAreaElement.style.display = 'block';
            verbTranslationHintElement.textContent = `${currentWord.translationVerbPreposition} (Падеж: ${currentWord.case})`;
        }, 1000);
    } else {
        selectedButton.classList.add('incorrect');
        choiceButtons.forEach(button => {
            if (button.textContent === currentWord.preposition) {
                button.classList.add('correct');
            }
        });
        verbTranslationHintElement.textContent = `Правильно: ${currentWord.verb} ${currentWord.preposition} (${currentWord.translationVerbPreposition}, Падеж: ${currentWord.case})`;
    }
}

function updateNavigationButtons() {
    prevButton.disabled = currentWordIndex === 0;
    nextButton.disabled = currentWordIndex === vocabulary.length - 1;
}

function updateProgressInfo() {
    currentWordNumberElement.textContent = currentWordIndex + 1;
    // totalWordCountElement.textContent = vocabulary.length; // Это теперь делается в initializeApp
}


// Event Listeners (остаются без изменений)
choiceButtons.forEach(button => button.addEventListener('click', handleChoice));

showTranslationButtonElement.addEventListener('click', () => {
    if (russianTranslationElement.style.display === 'none') {
        russianTranslationElement.style.display = 'block';
        showTranslationButtonElement.textContent = 'Скрыть перевод примера';
    } else {
        russianTranslationElement.style.display = 'none';
        showTranslationButtonElement.textContent = 'Показать перевод примера';
    }
});

prevButton.addEventListener('click', () => {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        loadWord(currentWordIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentWordIndex < vocabulary.length - 1) {
        currentWordIndex++;
        loadWord(currentWordIndex);
    }
});

// Initial load - теперь вызываем функцию загрузки
fetchVocabulary();