/* Значение таймера 0:0 */
/* Объявил интервал */
let timer = null;

let ending = new Audio();


ending.src = "../sound/TimerEnding.mp3"
/* Первая загрузка */
if
(localStorage.getItem('minuteId') == null || JSON.parse(localStorage.getItem('secondId')) == null) {
    localStorage.setItem('minuteId', JSON.stringify(0));
    localStorage.setItem('secondId', JSON.stringify(0));
    localStorage.setItem('condition', JSON.stringify(0));
    console.log("Первый запуск таймера: грузим локальное хранилище")
}

if (JSON.parse(localStorage.getItem('condition')) == 1){
    timer = setInterval(updateTimer, 1000);
}

function updateTimer(){
    if (JSON.parse(localStorage.getItem('secondId')) <= 0 && JSON.parse(localStorage.getItem('minuteId')) <= 0 && JSON.parse(localStorage.getItem('condition')) == 1){
        clearInterval(timer);
        timer = null;
        localStorage.setItem('condition', JSON.stringify(0));
        let opening = new Audio('../TimerOppening.mp3');
        opening.play();
        document.body.style.backgroundColor = "#ff0000"

        return;
        //console.log("Не конец?")
    };

    if (JSON.parse(localStorage.getItem('secondId')) == 0 && JSON.parse(localStorage.getItem('condition')) == 1){
        localStorage.setItem('minuteId', JSON.stringify(JSON.parse(localStorage.getItem('minuteId'))) - 1);
        console.log("Прошла минута")
        localStorage.setItem('secondId', JSON.stringify(60));
    };
    if (JSON.parse(localStorage.getItem('condition')) == 1){
        console.log("Прошла секунда");
        localStorage.setItem('secondId', JSON.stringify(JSON.parse(localStorage.getItem('secondId'))-1));
        document.querySelector('.minutes').value = JSON.parse(localStorage.getItem('minuteId'));
        document.querySelector('.seconds').value = JSON.stringify(JSON.parse(JSON.parse(localStorage.getItem('secondId'))));
    }
    if (JSON.parse(localStorage.getItem('condition')) == 0){
        clearInterval();
    }
}

/* Кнопки */
function startTimer(){
    if (timer != null){
        return;
    }
    document.body.style.backgroundColor = "#ffffff";
    ending.autoplay = true;
    console.log("Нажали на старт: запуск таймера");
    localStorage.setItem('minuteId', document.querySelector('.minutes').value);
    localStorage.setItem('secondId', document.querySelector('.seconds').value);
    localStorage.setItem('condition', JSON.stringify(1));
    timer = setInterval(updateTimer, 1000);
}

function stopTimer(){
    console.log('stop');
}

function resetTimer(){
    console.log('reset');
}



// let seconds = 0;
// let minutes = 0;
// let index = 0;
// let timer = null; //2 часа для понимания этой фичи)
//
// function startTimer(){
//     if (document.querySelector('.seconds').value == null || document.querySelector('.minutes').value == null){
//         document.querySelector('.seconds').value = 1;
//         document.querySelector('.minutes').value = 1;
//     } else if (document.querySelector('.seconds').value < 0 || document.querySelector('.minutes').value < 0){
//         console.log("Отрицательные значения");
//         return 0;
//     }
//
//     seconds = +document.querySelector('.seconds').value;
//     minutes = +document.querySelector('.minutes').value;
//     index = -1;
//     timer = setInterval(updateTime, 1000);
// }
//
// function updateTime(){
//     if (seconds == 0 && minutes == 0 && index == 1){
//         clearInterval(timer);
//         console.log("Закройся")
//         return;
//     }
//
//     if (seconds == 0 && minutes != 0){
//         minutes -= 1;
//         seconds = 60;
//         document.querySelector('.minutes').value = minutes;
//         document.querySelector('.seconds').value = seconds;
//     }
//
//     seconds -= 1;
//     index = 1;
//     document.querySelector('.seconds').value = seconds;
// }
