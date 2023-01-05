/* Значение таймера 0:0 */
/* Объявил интервал */
let timer = null;
let sound = new Audio(`../sound/sound.mp3`);

/* Первая загрузка */
if
(localStorage.getItem('minuteId') == null || JSON.parse(localStorage.getItem('secondId')) == null) {
    localStorage.setItem('minuteId', JSON.stringify(0));
    localStorage.setItem('secondId', JSON.stringify(0));
    localStorage.setItem('condition', JSON.stringify(0));
    localStorage.setItem('stopedTimer', JSON.stringify(0));
    localStorage.setItem('beginTimer', JSON.stringify(0));
    console.log("Первый запуск таймера: грузим локальное хранилище")
}

if (JSON.parse(localStorage.getItem('condition')) == 1 && JSON.parse(localStorage.getItem('stopedTimer')) == 0){
    timer = setInterval(updateTimer, 1000);
}

function updateTimer(){
    if (JSON.parse(localStorage.getItem('beginTimer')) == 0 && JSON.parse(localStorage.getItem('secondId')) <= 0 && JSON.parse(localStorage.getItem('minuteId')) <= 0){
        clearInterval(timer);
        timer = null;
        localStorage.setItem('condition', JSON.stringify(0));
        localStorage.setItem('beginTimer', JSON.stringify(0));
        return;
    }
    if (JSON.parse(localStorage.getItem('secondId')) <= 0 && JSON.parse(localStorage.getItem('minuteId')) <= 0 && JSON.parse(localStorage.getItem('condition')) == 1){
        clearInterval(timer);
        timer = null;
        localStorage.setItem('condition', JSON.stringify(0));
        document.body.style.backgroundColor = "#ff0000"

        return sound.play();
        //console.log("Не конец?")
    };

    if (JSON.parse(localStorage.getItem('secondId')) == 0 && JSON.parse(localStorage.getItem('condition')) == 1){
        localStorage.setItem('minuteId', JSON.stringify(JSON.parse(localStorage.getItem('minuteId'))) - 1);
        console.log("Прошла минута")
        localStorage.setItem('secondId', JSON.stringify(60));
    };
    if (JSON.parse(localStorage.getItem('condition')) == 1){
        if (JSON.parse(localStorage.getItem('beginTimer')) != 1){
            localStorage.setItem('beginTimer', JSON.stringify(1));
        }
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
    if (timer != null || JSON.parse(localStorage.getItem('stopedTimer')) == 1){
        return;
    }

    console.log("Нажали на старт: запуск таймера");
    localStorage.setItem('minuteId', document.querySelector('.minutes').value);
    localStorage.setItem('secondId', document.querySelector('.seconds').value);
    localStorage.setItem('condition', JSON.stringify(1));
    localStorage.setItem('stopedTimer', JSON.stringify(0));

    timer = setInterval(updateTimer, 1000);
}

function stopTimer(){
    if (JSON.parse(localStorage.getItem('condition') == 1)){
        console.log('stop');
        if (JSON.parse(localStorage.getItem('stopedTimer')) == 0){
            clearInterval(timer);
            localStorage.setItem('stopedTimer', JSON.stringify(1));
        } else{
            timer = setInterval(updateTimer, 1000);
            localStorage.setItem('stopedTimer', JSON.stringify(0));
        }
    }
}

function resetTimer(){
    console.log('reset');
    document.body.style.backgroundColor = "#ffffff";
    localStorage.clear();
    clearInterval(timer);
    document.querySelector('.minutes').value = 0;
    document.querySelector('.seconds').value = 0;
    timer = null;
    localStorage.setItem('minuteId', JSON.stringify(0));
    localStorage.setItem('secondId', JSON.stringify(0));
    localStorage.setItem('condition', JSON.stringify(0));
    localStorage.setItem('stopedTimer', JSON.stringify(0));
    localStorage.setItem('beginTimer', JSON.stringify(0));
}

function oneMinute(){
    if (timer != null || JSON.parse(localStorage.getItem('stopedTimer')) == 1){
        return;
    }
    console.log("1 минута");
    localStorage.setItem('minuteId', JSON.stringify(1));
    document.querySelector('.minutes').value = 1;
}

function fiveMinute(){
    if (timer != null || JSON.parse(localStorage.getItem('stopedTimer')) == 1){
        return;
    }
    console.log("5 минута");
    localStorage.setItem('minuteId', JSON.stringify(5));
    document.querySelector('.minutes').value = 5;
}

function tenMinutes(){
    if (timer != null || JSON.parse(localStorage.getItem('stopedTimer')) == 1){
        return;
    }
    console.log("10 минута");
    localStorage.setItem('minuteId', JSON.stringify(10));
    document.querySelector('.minutes').value = 10;
}
