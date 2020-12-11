let totalSliders = document.querySelectorAll('.slider-item').length;
let currentSlider = 0;
let slider = document.querySelector('.slider').clientWidth;

document.querySelector('.slider-width').style.width = `${slider * totalSliders}px`;


function goPrev(){
    currentSlider--;
    if(currentSlider < 0){
        currentSlider = totalSliders -1
    }
    updateMargin();
}
function goNext(){
    currentSlider++;
    if(currentSlider > (totalSliders -1)){
        currentSlider = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItem = document.querySelector('.slider-item').clientWidth;
    console.log(sliderItem)
    let newMargin = (currentSlider * sliderItem);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}
setInterval(goPrev, 2000);
