const questions=[
    {
        question:"СУЩНОСТЬ ФИЛОСОФИИ – В РАЗМЫШЛЕНИЯХ НАД ВСЕОБЩИМИ ПРОБЛЕМАМИ В СИСТЕМЕ",
        answer:[
            "мир-человек", 
            "космос-природа",
            "природа-человек",
            "человек-общество"
        ],
        correct: 'мир-человек',
    },
    {
        question:"ФИЛОСОФ Г. Е. СТРУВЕ В РАБОТЕ «ВВЕДЕНИЕ В ФИЛОСОФИЮ» ОБОСНОВАЛ НЕОБХОДИМОСТЬ ФОРМИРОВАНИЯ В РАМКАХ ФИЛОСОФИИ НОВОЙ ДИСЦИПЛИНЫ –",
        answer:[
            "«философия философии»", 
            "«философия жизни»",
            "«философия науки»",
            "«философия мира»"],
        correct: '«философия философии»',
    },
    {
        question:"ФИЛОСОФИЯ ЕСТЬ МИРОВОЗЗРЕНИЕ, ПРЕДСТАВЛЯЮЩЕЕ СОБОЙ ",
        answer:[
            "совокупность взглядов на мир в целом и на отношение человека к этому миру", 
            "научную сферу общественного сознания",
            "научную картину мира",
            "совокупность взглядов на мир"
        ],
        correct: 'совокупность взглядов на мир в целом и на отношение человека к этому миру',
    },
    {
        question:"ФИЛОСОФИЯ ИМЕЕТ СПЕЦИФИЧЕСКИЙ КАТЕГОРИАЛЬНЫЙ АППАРАТ, ОПИРАЮЩИЙСЯ В СВОЁМ РАЗВИТИИ НА",
        answer:[
            "все науки, на единый совокупный опыт развития человечества", 
            "здравый смысл",
            "гуманитарные науки ",
            "ведущую науку эпохи"],
        correct: 'все науки, на единый совокупный опыт развития человечества',
    },
];  //Массив с вопросами

//Находим элементы
const headerContainer = document.querySelector('#header_vopros');
const listContainer = document.querySelector('#answer_list');
const submitReply = document.querySelector('#submit_reply');

let submitBack = document.querySelector('#submit_back');
let answerBtn = document.querySelector('#btn_ans');

//Переменные
let score = 0;  // кол-во правильных ответов
let questionIndex =0;   //Текущий вопрос
let numberOFckicks = 0; //Количество кликов на кнопки ответов

//Вызов функций
clearPage();
showQuestion();
// returnBack();

submitReply.onclick = checkAnsver;
// submitBack.onclick = returnBack;
answerBtn.onclick = pressingAbutton;


//! FUNCTION !

//Функция очищистки html разметки
function clearPage(){
    headerContainer.innerHTML='';
    listContainer.innerHTML='';
}

//Фунция сброса нумерации кликов
function resetClicks(){
    numberOFckicks = 0;
}

//Функция для отображения вопроса
function showQuestion(){
    //Вывод рондомного числа
    // let m={};
    // let arry= new Array();
    // arry = [1, 2, 3, 4];
    // for(let i=arry.length-1; i>0; i--){
    //     let j = Math.floor(Math.random() * (i+1));
    //     let tmp =arry[i];
    //     arry[i]=arry[j];
    //     arry[j]=tmp;
    // };
    // console.log (arry);
    
    
    //Вывод вопроса
    const headerTemplate = `<h2 class="title">%title%</h2>`;    //Шаблон
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;
    console.log(questions[questionIndex]['question']);

    //Вывод ответов
    // for(answerText of questions[questionIndex]['answer']){        
    //     const questionTemplate = 
    //         `<button class="btn">
    //             <p>%qustion%</p>
    //         </button>`;

    //     const answerHTML = questionTemplate.replace('%qustion%', answerText);
    //     console.log(answerHTML);

    //     listContainer.innerHTML += answerHTML;
    // }

    //Генерация рандомных ответов
    let arry= new Array();
    arry = questions[questionIndex]['answer'];
    // arry=questions[questionIndex].answer[i];
    for(let i=arry.length-1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1));
        let tmp =arry[i];
        arry[i]=arry[j];
        arry[j]=tmp;
    };

    let answerNumber = 1;
    //Вывод вывод рандомных ответов
    for(arry of questions[questionIndex]['answer']){        
        console.log(answerNumber, arry);
        const questionTemplate = 
            `<button value="%namebtn%" class="btn" id="btn_ans" onclick="pressingAbutton(this)">
                <p>%qustion%</p>
            </button>`;
        let answerHTML = questionTemplate
                                        .replace('%qustion%', arry)
                                        .replace('%namebtn%', arry);
        
        listContainer.innerHTML += answerHTML;
        console.log(arry);
        console.log(answerHTML);
        answerNumber++;
    };
}

//Функция кнопки "Ответить"
function checkAnsver(){
    if(numberOFckicks != 0){
        resetClicks();  //Сбрасываем нумерацию кликов
        console.log('Rkbr');
        if(questionIndex != questions.length-1){
            console.log('Это не последний вопрос')
            questionIndex++;
            clearPage();
            showQuestion();
        }
        else{
            console.log('Это последний вопрос')
            clearPage();
            showResults();
        }
    }
    else{
        return;
    }
}

//Функция нажатие на кнопку варианта ответа
function pressingAbutton(element){
    // answerBtn.blur();
    // console.log('кнопка');
    let userAnswer = element.value;
    let giveAnswer = questions[questionIndex]['correct'];
    const colorone = "green"; //Зелёный цвет
    const colortwo = "red";   //Красный цвет
    console.log(userAnswer);
    console.log(questions[questionIndex]['correct']);
    
    numberOFckicks = ++numberOFckicks % 7;
    // numberOFckicks ++;

    try{
        if(userAnswer == giveAnswer){
            element.style.background = colorone;
            if((numberOFckicks == 1)){ 
                score++;
                
            }
        }else{
            element.style.background = colortwo;
        }
    }
    catch{
        console.log("Ошибка в function pressingAbutton (Функция нажатие на кнопку)");
    }
    console.log('score = ',score);
    console.log('OneClick = ', numberOFckicks);

    //     try{
//         if(userAnswer == giveAnswer){
//             element.style.background = colorone; 
//             score++;
//         }
//         // else if(userAnswer == giveAnswer){
//         //     element.style.background = colorone;
//         // }
//         else{
//             element.style.background = colortwo; 
//         }
//     }
//     catch{
//         console.log("Ошибка в function pressingAbutton (Функция нажатие на кнопку)");
//     }
//     console.log('score = ',score);
// }
}

//Функция отображающее последнее формы
function showResults(){
    console.log('showResult start');
    console.log(score);
    
    const resultsTemplate = `
    <h2 class="title" id="title_end">%title%</h2>
    <h3 class="summary" id="summary_end">%message%</h3>
    <p class="result" id="result_end">%result%</p>
    `;

    let title, message;
    const que_leng = questions.length;  //Колличество всех вопросов
    let percent_score = ((score * 100) / que_leng);    //Набранный бал в процентах
    const percent_que_leng = ((que_leng * 100) / que_leng); //Колличество всех вопросов в процентах

    if(percent_score == percent_que_leng){
        title = 'Поздравляем';
        message = 'Вы ответили верно на все вопросы';
    }
    else if( percent_score>= 50){
        title = 'Неплохой результат.';
        message = 'Вы дали больше половины правмльных ответов!';
    }
    else {
        title = 'Стоит постараться';
        message = 'Пока у вас меньше половины правильных ответов';
    }

    // let result = `${percent_score} из ${percent_que_leng}%`;
    let result = `Верно: ${percent_score}%`
    console.log(result);

    const finalMessage = resultsTemplate
                                .replace('%title%', title)
                                .replace('%message%', message)
                                .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;

    submitReply.blur();   //Блюр кнопки
    submitReply.innerText = 'Начать заново';  //Изменеие текста на кнопке
    submitReply.onclick = function(){history.go()}; //Перезагрузка страницы по клику
}

//Функция кнопки "Назад" 

// function returnBack(){
//     if(questionIndex != questions.length + 1){
//         console.log('Это первый вопрос');
//         submitBack.setAttribute('disabled', 'true');
//     }
//     else{
//         console.log('Это не первый вопрос');
//         submitBack.removeAttribute('disabled');
//         console.log(submitBack.setAttribute('disabled', 'false'));
//         questionIndex--;
//         clearPage();
//         showQuestion();
//     }
    

//     // const conditionоn = "none";
//     // const conditionоff = "inline-block";

//     // if(questionIndex == questions.length + 1){
//     //     console.log('Это первый вопрос')
//     //     element.style.display = conditionоn;
//     // }
//     // else{
//     //     console.log('Это не первый вопрос')
//     //     element.style.display = conditionоff;
//     //     questionIndex--;
//     //     clearPage();
//     //     showQuestion();
//     // }
// }
