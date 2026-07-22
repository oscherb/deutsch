// =====================================
// Zwar ... aber Trainer
// Hauptlogik
// =====================================


let currentLevel = "A2";

let currentTask = null;

let firstConnector = null;
let secondConnector = null;

let usedTasks = [];



// Элементы страницы

const sentenceBox = document.getElementById("sentence");

const connectorButtons =
    document.getElementById("connectorButtons");

const messageBox =
    document.getElementById("message");

const nextButton =
    document.getElementById("nextButton");

const themeButton =
    document.getElementById("themeButton");



// =====================================
// Загрузка задания
// =====================================


function loadTask() {


    firstConnector = null;
    secondConnector = null;


    messageBox.textContent = "";

    nextButton.hidden = true;


    const tasks = sentences[currentLevel];


    // если все задания использованы
    if (usedTasks.length >= tasks.length) {

        usedTasks = [];

    }



    let index;


    do {

        index =
            Math.floor(Math.random() * tasks.length);


    } while (usedTasks.includes(index));


    usedTasks.push(index);



    currentTask = tasks[index];



    renderSentence();

    renderButtons();

}



// =====================================
// Вывод предложения
// =====================================


function renderSentence() {


    let html =
        currentTask.text;



    html = html.replace(
        "___",
        `<span id="slot1"
        class="connector-slot">
        ?
        </span>`
    );


    html = html.replace(
        "___",
        `<span id="slot2"
        class="connector-slot">
        ?
        </span>`
    );


    sentenceBox.innerHTML = html;


}



// =====================================
// Кнопки союзов
// =====================================


function renderButtons(){


    connectorButtons.innerHTML = "";


    currentTask.connectors.forEach(connector=>{


        const button =
            document.createElement("button");


        button.textContent =
            connector;



        button.onclick = () =>
            chooseConnector(connector);



        connectorButtons.appendChild(button);


    });


}




// =====================================
// Выбор союза
// =====================================


function chooseConnector(connector){



    const slot1 =
        document.getElementById("slot1");


    const slot2 =
        document.getElementById("slot2");



    // если союз уже выбран -
    // удалить его


    if(firstConnector === connector){


        firstConnector = null;

        slot1.textContent="?";

        slot1.classList.remove(
            "filled"
        );


        return;

    }



    if(secondConnector === connector){


        secondConnector = null;

        slot2.textContent="?";


        slot2.classList.remove(
            "filled"
        );


        return;

    }





    // заполнение первого поля


    if(!firstConnector){


        firstConnector = connector;


        slot1.textContent =
            connector;


        slot1.classList.add(
            "filled"
        );


    }


    // заполнение второго


    else if(!secondConnector){


        secondConnector = connector;


        slot2.textContent =
            connector;


        slot2.classList.add(
            "filled"
        );


        checkAnswer();

    }


}




// =====================================
// Проверка
// =====================================


function checkAnswer(){


    const slot1 =
        document.getElementById("slot1");


    const slot2 =
        document.getElementById("slot2");



    if(
        firstConnector ===
        currentTask.answer[0]
        &&
        secondConnector ===
        currentTask.answer[1]

    ){


        slot1.classList.add(
            "correct"
        );


        slot2.classList.add(
            "correct"
        );


        messageBox.textContent =
            "Richtig!";



        nextButton.hidden =
            false;



    }

	else {
	
		slot1.classList.add(
			"wrong"
		);
	
	
		slot2.classList.add(
			"wrong"
		);
	
	
		messageBox.textContent =
			"Leider falsch. Korrigiere deine Antwort.";
	
	
		// оставляем выбор на экране,
		// пользователь может нажать на союз
		// и убрать его
	
	
	}


}




// =====================================
// Следующее задание
// =====================================


nextButton.onclick =
    loadTask;




// =====================================
// Выбор уровня
// =====================================


document
.querySelectorAll(".level")
.forEach(button=>{


    button.onclick=function(){


        document
        .querySelector(".level.active")
        .classList.remove("active");



        this.classList.add("active");



        currentLevel =
            this.dataset.level;



        usedTasks=[];


        loadTask();


    };


});




// =====================================
// Переключатель темы
// =====================================


themeButton.onclick=function(){


    document.body
    .classList.toggle("dark");



    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
        ?
        "dark"
        :
        "light"
    );


};




// =====================================
// Загрузка сохранённой темы
// =====================================


if(
    localStorage.getItem("theme")
    ===
    "dark"

){

    document.body
    .classList.add("dark");

}




// старт

loadTask();