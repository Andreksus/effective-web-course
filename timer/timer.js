/* Значение таймера 0:0 */
if (localStorage.getItem('minuteId') == null){
    localStorage.setItem('minuteId', JSON.stringify(0));
    console.log("1");
}

if (localStorage.getItem('secondId') == null){
    localStorage.setItem('secondId', JSON.stringify(0));
    console.log("2");
}



/* Кнопки */
function startTimer(){
    console.log('start');
    let element = document.getElementsByClassName('minutes')[0].value;
    console.log(element);
}

function stopTimer(){
    console.log('stop');
}

function resetTimer(){
    console.log('reset');
}


