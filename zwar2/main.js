// main.js — komplett überarbeitet

let currentLevel = null;
let currentSentenceObj = null;
let currentPair = null;
let usedConnectors = [];
let slotElements = [];

const sentenceContainer = document.getElementById("sentenceContainer");
const connectorButtonsContainer = document.getElementById("connectorButtonsContainer");
const nextSentenceButton = document.getElementById("nextSentenceButton");
const themeToggleButton = document.getElementById("themeToggle");
const pairLabel = document.getElementById("currentPairLabel");

const difficultyButtons = document.querySelectorAll(".difficulty-btn");

// ===============================
//   THEME TOGGLE
// ===============================
themeToggleButton.addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }
});

// ===============================
//   GET ALL CONNECTORS OF LEVEL
// ===============================
function getAllConnectorsForLevel(level) {
    const levelData = sentencesData[level];
    const all = new Set();

    levelData.forEach(pairObj => {
        pairObj.connectors.forEach(c => all.add(c));
    });

    return Array.from(all);
}

// ===============================
//   DIFFICULTY SELECTION
// ===============================
difficultyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        difficultyButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentLevel = btn.dataset.level;
        loadRandomSentence();
    });
});

// ===============================
//   LOAD RANDOM SENTENCE
// ===============================
function loadRandomSentence() {
    if (!currentLevel) return;

    const levelData = sentencesData[currentLevel];
    if (!levelData || levelData.length === 0) return;

    // Zufällige Paar-Auswahl
    const pairIndex = Math.floor(Math.random() * levelData.length);
    const pairObj = levelData[pairIndex];
    currentPair = pairObj.pair;

    // Zufälliger Satz aus diesem Paar
    const sentenceIndex = Math.floor(Math.random() * pairObj.sentences.length);
    currentSentenceObj = pairObj.sentences[sentenceIndex];

    // WICHTIG: alle Konnektoren des Levels anzeigen
    currentConnectors = getAllConnectorsForLevel(currentLevel);

    usedConnectors = [];
    slotElements = [];
    nextSentenceButton.classList.add("hidden");

    renderSentence();
    renderConnectorButtons();
}

// ===============================
//   RENDER SENTENCE
// ===============================
function renderSentence() {
    sentenceContainer.innerHTML = "";
    pairLabel.textContent = `Konnektoren-Paar: ${currentPair}`;

    const parts = currentSentenceObj.text.split("___");

    for (let i = 0; i < parts.length; i++) {
        const spanText = document.createElement("span");
        spanText.className = "sentence-word";
        spanText.textContent = parts[i];
        sentenceContainer.appendChild(spanText);

        if (i < parts.length - 1) {
            const slot = document.createElement("span");
            slot.className = "sentence-slot";
            slot.dataset.index = slotElements.length;
            slot.addEventListener("click", () => clearSlot(slot));
            sentenceContainer.appendChild(slot);
            slotElements.push(slot);
        }
    }
}

// ===============================
//   RENDER CONNECTOR BUTTONS
// ===============================
function renderConnectorButtons() {
    connectorButtonsContainer.innerHTML = "";

    currentConnectors.forEach(conn => {
        const btn = document.createElement("button");
        btn.className = "connector-btn";
        btn.textContent = conn;
        btn.addEventListener("click", () => handleConnectorClick(conn));
        connectorButtonsContainer.appendChild(btn);
    });
}

// ===============================
//   HANDLE CONNECTOR CLICK
// ===============================
function handleConnectorClick(connector) {
    // Wenn Konnektor bereits im Satz verwendet wird → entfernen
    const indexUsed = usedConnectors.indexOf(connector);
    if (indexUsed !== -1) {
        const slot = slotElements[indexUsed];
        if (slot) {
            slot.textContent = "";
            slot.classList.remove("filled", "correct-light", "correct-dark", "wrong");
        }
        usedConnectors[indexUsed] = null;
        return;
    }

    // Sonst in das erste freie Feld einfügen
    for (let i = 0; i < slotElements.length; i++) {
        if (!usedConnectors[i]) {
            usedConnectors[i] = connector;
            slotElements[i].textContent = connector;
            slotElements[i].classList.add("filled");
            break;
        }
    }

    // Wenn beide Felder gefüllt sind → prüfen
    if (usedConnectors.filter(c => c).length === slotElements.length) {
        checkAnswer();
    }
}

// ===============================
//   CLEAR SLOT
// ===============================
function clearSlot(slot) {
    const index = parseInt(slot.dataset.index, 10);
    usedConnectors[index] = null;
    slot.textContent = "";
    slot.classList.remove("filled", "correct-light", "correct-dark", "wrong");
}

// ===============================
//   CHECK ANSWER
// ===============================
function checkAnswer() {
    const correct = currentSentenceObj.solution;
    const body = document.body;
    const isLight = body.classList.contains("light-theme");

    let allCorrect = true;

    for (let i = 0; i < slotElements.length; i++) {
        const slot = slotElements[i];
        const userConn = usedConnectors[i];
        const correctConn = correct[i];

        slot.classList.remove("correct-light", "correct-dark", "wrong");

        if (userConn === correctConn) {
            if (isLight) slot.classList.add("correct-light");
            else slot.classList.add("correct-dark");
        } else {
            slot.classList.add("wrong");
            allCorrect = false;
        }
    }

    if (allCorrect) {
        nextSentenceButton.classList.remove("hidden");
    } else {
        nextSentenceButton.classList.add("hidden");
    }
}

// ===============================
//   NEXT SENTENCE BUTTON
// ===============================
nextSentenceButton.addEventListener("click", () => {
    loadRandomSentence();
});
