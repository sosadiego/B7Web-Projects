let sliderItem = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

let sliderCotainer = document.querySelector('.slider').clientWidth;

document.querySelector('.controls').style.height = `${document.querySelector('.slider-area').clientHeight}px`;

document.querySelector('.slider-area').style.width = `${sliderCotainer * sliderItem}px`;


function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = sliderItem -1;
    }
    updateMargin()
}

function goNext(){
    currentSlide++;
    if(currentSlide > (sliderItem - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let newMargin = (currentSlide * sliderCotainer);
    document.querySelector('.slider-area').style.marginLeft = `-${newMargin}px`
}
setInterval(goNext, 4000);
