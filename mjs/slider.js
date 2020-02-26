var containerSlider = document.querySelectorAll('.slide');

window.addEventListener('wheel' , function(e){
    if(e.deltaY < 0){
        console.log("up");
        for(i = 0; i< containerSlider.length; i++){
            TweenMax.to(containerSlider, 0.5, {
                left: "+=50"
            });
        }  
    }
    else{
        console.log("down");
        for(i = 0; i< containerSlider.length; i++){
            TweenMax.to(containerSlider, 0.5, {
                left: "-=50"
            });
        }
    }
})