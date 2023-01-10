let slides = document.getElementsByClassName("mySlides");
let slideIndex;
setInterval(plusSlides, 3000, 1);
if (localStorage.getItem('index') == null && JSON.parse(localStorage.getItem('index')) !== 1){
    slideIndex = 1;
    localStorage.setItem('index', JSON.stringify(slideIndex));
}
else
{
    slideIndex = JSON.parse(localStorage.getItem('index'));
}
document.onkeypress = function(event){
    if (event.code === "KeyC" || event.code === "KeyX") plusSlides(1);//e.code стрелочек и пробела не нашел :/
    if (event.code === "KeyZ") plusSlides(-1);
}

function plusSlides(n){
    slideIndex+=n;
    localStorage.setItem('index', JSON.stringify(slideIndex));
    showSlides(slideIndex);
}

function showSlides(n){
    let i;

    if (n > slides.length){
        slideIndex = 1;
        localStorage.setItem('index', JSON.stringify(slideIndex))
    }

    if (n < 1){
        slideIndex = slides.length;
        localStorage.setItem('index', JSON.stringify(slideIndex));
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    console.log(slides[slideIndex-1].style.display = "block")
    localStorage.setItem('index', JSON.stringify(slideIndex))
    console.log(JSON.parse(localStorage.getItem('index')));
}