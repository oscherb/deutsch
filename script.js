// Список всех возможных предлогов для генерации неправильных вариантов
const allPrepositions = [
    "an", "auf", "aus", "bei", "bis", "durch", "für", "gegen", "hinter",
    "in", "mit", "nach", "neben", "ohne", "seit", "über", "um",
    "unter", "von", "vor", "zu"
];

let vocabulary = [];
let currentWordIndex = 0;
let currentWord = {};
let answerGiven = false;

// Элементы DOM
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
const russianTranslationElement = document.getElementById('russian-translation');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const currentWordNumberElement = document.getElementById('current-word-number');
const totalWordCountElement = document.getElementById('total-word-count');


async function fetchVocabulary() {
    try {
        const response = await fetch('vocabulary.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        vocabulary = data;
        initializeApp();
    } catch (error) {
        console.error("Не удалось загрузить словарь:", error);
        verbTextElement.textContent = "Ошибка!";
        verbTranslationHintElement.textContent = "Не удалось загрузить словарь.";
        document.querySelector('.trainer-container').innerHTML = `
            <h2 style="color: red;">Ошибка загрузки словаря!</h2>
            <p>Пожалуйста, убедитесь, что файл <strong>vocabulary.json</strong> находится в той же папке, что и основной HTML файл, и не содержит ошибок.</p>
            <p><small>Детали ошибки: ${error.message}</small></p>
            <footer class="page-footer" style="margin-top: 20px; border-top: none;">
             <a href="index.html" class="home-link-button">На главную</a>
            <p class="copyright" style="margin-top:10px;">&copy; 2025 Aleksand Shcherbyna. Alle Rechte vorbehalten.</p>
            </footer>`;
    }
}

function initializeApp() {
    if (vocabulary.length === 0 && verbTextElement.textContent !== "Ошибка!") { // Не перезаписывать сообщение об ошибке
        verbTextElement.textContent = "Словарь пуст.";
        choiceButtons.forEach(button => button.disabled = true);
        prevButton.disabled = true;
        nextButton.disabled = true;
        return;
    }
    if (vocabulary.length > 0) {
      totalWordCountElement.textContent = vocabulary.length;
      loadWord(currentWordIndex);
      prevButton.disabled = currentWordIndex === 0; // Начальная установка кнопки Назад
      nextButton.disabled = currentWordIndex === vocabulary.length - 1; // Начальная установка кнопки Вперед
    }
}

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
    while (choices.length < 4) { // Если уникальных не хватило
        let dummyCount = 1;
        while (choices.length < 4) {
            const dummyPrep = `Предлог ${dummyCount++}`;
            if (!choices.includes(dummyPrep)) choices.push(dummyPrep);
            else if (dummyCount > 10) choices.push("---"); // Крайний случай
        }
    }

    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    return choices;
}

function loadWord(index) {
    answerGiven = false;
    currentWord = vocabulary[index];

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

    updateNavigationButtons();
    updateProgressInfo();
}

function showExampleAndTranslation() {
    germanExampleElement.textContent = currentWord.exampleGerman;
    russianTranslationElement.textContent = currentWord.translationExample;
    exampleAreaElement.style.display = 'block';
    russianTranslationElement.style.display = 'block';
}

function handleChoice(event) {
    if (answerGiven) return;
    answerGiven = true;

    const selectedButton = event.target;
    const selectedPreposition = selectedButton.textContent;

    choiceButtons.forEach(button => button.disabled = true);

    if (selectedPreposition === currentWord.preposition) {
        selectedButton.classList.add('correct');
        verbTranslationHintElement.textContent = `${currentWord.translationVerbPreposition} (Падеж: ${currentWord.case})`;
        setTimeout(() => {
            showExampleAndTranslation();
        }, 1000);
    } else {
        selectedButton.classList.add('incorrect');
        choiceButtons.forEach(button => {
            if (button.textContent === currentWord.preposition) {
                button.classList.add('correct');
            }
        });
        verbTranslationHintElement.textContent = `Правильно: ${currentWord.verb} ${currentWord.preposition} (${currentWord.translationVerbPreposition}, Падеж: ${currentWord.case})`;
        showExampleAndTranslation();
    }
}

function updateNavigationButtons() {
    prevButton.disabled = currentWordIndex === 0;
    nextButton.disabled = currentWordIndex === vocabulary.length - 1;
}

function updateProgressInfo() {
    currentWordNumberElement.textContent = currentWordIndex + 1;
    // totalWordCountElement устанавливается в initializeApp
}

// Event Listeners
choiceButtons.forEach(button => button.addEventListener('click', handleChoice));

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

// Initial load
fetchVocabulary();