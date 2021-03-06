



///////////NE PAS LANCER LE SCRIPT POUR LA VERSION DESKTOP
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if(vw <= 1024){

  var boutonsMenu = document.querySelectorAll('.link');

  for (i=0; i<boutonsMenu.length; i++){
    boutonsMenu[i].addEventListener("click", function(){
      if(tlClose.progress() < 1){
      tlClose.play();
  } else {
      tlClose.restart();
  }
  });
  }


  //OPEN TRIGGER
  var openTrigger = $('.menu-trigger');
  var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
  var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
  var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

  //CLOSE TRIGGER
  var closeTrigger = $('.close-trigger');
  var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
  var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');

  //MENU
  var menuContainer = $('.menu-container');
  var innerContainer = $('.inner-container');
  var menu = $('.menu');
  var menuTop = $('.menu-bg.top');
  var menuMiddle = $('.menu-bg.middle');
  var menuBottom = $('.menu-bg.bottom');

  //TL
  var tlOpen = new TimelineMax({paused: true});
  var tlClose = new TimelineMax({paused: true});

  //OPEN TIMELINE
  tlOpen.add("preOpen")
  .to(openTriggerTop, 0.4, {
    x: "+=80px", y: "-=80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
      closeTrigger.css('z-index','25');
    }
  }, "preOpen")
  .to(openTriggerMiddle, 0.4, {
    x: "+=80px", y: "-=80px", ease: Power4.easeIn,
    onComplete: function() {
      openTrigger.css('visibility','hidden');
      innerContainer[0].style.height = "100%";
    }
  }, "preOpen")
  .to(openTriggerBottom, 0.4, {
    x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
  }, "preOpen")
  .add("open", "-=0.4")
  .to(menuTop, 0.8, {
    y: "13%",
    ease: Power4.easeInOut
  }, "open")
  .to(menuMiddle, 0.8, {
    scaleY: 3.2,
    ease: Power4.easeInOut
  }, "open")
  .to(menuBottom, 0.8, {
    y: "-114%",
    ease: Power4.easeInOut
  }, "open")
  .fromTo(menu, 0.6, {
    y: 30, opacity: 0, visibility: 'hidden'
  }, {
    y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
  }, "-=0.2")
  .add("preClose", "-=0.8")
  .to(closeTriggerLeft, 0.8, {
    x: "-=100px", y: "+=100px", ease: Power4.easeOut
  }, "preClose")
  .to(closeTriggerRight, 0.8, {
    x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
  }, "preClose");

  //CLOSE TIMELINE
  tlClose.add("close")
    .to(menuTop, 0.2, {
    backgroundColor: "#d21404", ease: Power4.easeInOut, onComplete: function() {
      closeTrigger.css('z-index','5');
  openTrigger.css('visibility','visible');
    }
  }, "close")
  .to(menuMiddle, 0.2, {
    backgroundColor: "#d21404", ease: Power4.easeInOut
  }, "close") 
  .to(menuBottom, 0.2, {
    backgroundColor: "#d21404", ease: Power4.easeInOut
  }, "close")
    .to(menu, 0.6, {
    y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
      menu.css('visibility','hidden');
    }
  }, "close")
  .to(menuTop, 0.8, {
    y: "-113%",
    ease: Power4.easeInOut
  }, "close", "+=0.2")
  .to(menuMiddle, 0.8, {
    scaleY: 0,
    ease: Power4.easeInOut
  }, "close", "+=0.2")
  .to(menuBottom, 0.8, {
    y: "23%",
    ease: Power4.easeInOut,
    onComplete: function() {
      innerContainer[0].style.height = "0%";
      menuTop.css('background-color','#ffffff');
      menuMiddle.css('background-color','#ffffff');
      menuBottom.css('background-color','#ffffff');
    }
  }, "close", "+=0.2")
  .to(closeTriggerLeft, 0.2, {
    x: "+=100px", y: "-=100px", ease: Power4.easeIn
  }, "close")
  .to(closeTriggerRight, 0.2, {
    x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
  }, "close")
  .to(openTriggerTop, 1, {
    x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
  }, "close")
  .to(openTriggerMiddle, 1, {
    x: "-=80px", y: "+=80px", ease: Power4.easeOut
  }, "close")
  .to(openTriggerBottom, 1, {
    x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
  }, "close");

  //EVENTS
  openTrigger.on('click', function(){
    if(tlOpen.progress() < 1){
                  tlOpen.play();
              } else {
                  tlOpen.restart();
              }
  });
        
  closeTrigger.on('click', function(){
    if(tlClose.progress() < 1){
                  tlClose.play();
              } else {
                  tlClose.restart();
              }
  });
}