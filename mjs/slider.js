var containerSlider = document.querySelector('.containerSlider');
console.log(containerSlider);



window.addEventListener('wheel', function(){
    console.log("wheel");
    containerSlider.scrollBy(200, 0);
});