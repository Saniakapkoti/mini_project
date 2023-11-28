var numberofftime = document.querySelectorAll(".drum").length;
for(var i = 0 ; i<numberofftime ; i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
  var innerhtml = this.innerHTML;
  makesound(innerhtml);
  buttonanimation(innerhtml)
  }
);
}

document.addEventListener("keypress",function(event){
{
  makesound(event.key);
  buttonanimation(event.key);
}
})



// function makesound(key){
  function makesound(key){
    switch (key) {
      case "a":
        var tom1 = new Audio("sounds/A.wav"); 
        tom1.play();
        break;
         
      case "b":
        var tom2 = new Audio("sounds/B.wav"); 
        tom2.play();
        break;
        
      case "c":
        var tom3 = new Audio("sounds/C.wav"); 
        tom3.play();
        break;
        
      case "d":
        var tom4 = new Audio("sounds/D.wav"); 
        tom4.play();
        break;
        
      case "e":
        var snare = new Audio("sounds/E.wav"); 
        snare.play();
        break;
        
      case "f":
        var crash = new Audio("sounds/F.wav"); 
        crash.play();
        break;
        
      case "g":
        var kick = new Audio("sounds/G.wav"); 
        kick.play();
        break;

       case "h":
          var crash = new Audio("sounds/H.wav"); 
          crash.play();
          break;

       case "i":
            var crash = new Audio("sounds/I.wav"); 
            crash.play();
            break;
       case "j":
            var crash = new Audio("sounds/J.wav"); 
            crash.play();
            break;
       case "k":
            var crash = new Audio("sounds/K.wav"); 
            crash.play();
            break;  
       case "k":
              var crash = new Audio("sounds/K.wav"); 
              crash.play();
              break; 
       case "l":
              var crash = new Audio("sounds/L.wav"); 
              crash.play();
              break;
       case "m":
              var crash = new Audio("sounds/M.wav"); 
              crash.play();
              break;
       case "n":
              var crash = new Audio("sounds/N.wav"); 
              crash.play();
              break; 
       case "o":
              var crash = new Audio("sounds/O.wav"); 
              crash.play();
              break;
       case "p":
              var crash = new Audio("sounds/P.wav"); 
              crash.play();
              break;   
      case "q":
               var crash = new Audio("sounds/Q.wav"); 
                crash.play();
                break;  
      case "r":
                  var crash = new Audio("sounds/R.wav"); 
                  crash.play();
                  break; 
      case "s":
                 var crash = new Audio("sounds/S.wav"); 
                 crash.play();
                 break; 
      case "t":
                  var crash = new Audio("sounds/T.wav"); 
                  crash.play();
                  break; 
       
          
      default:
        break;
     }

  }


  ///function for button animation
  function buttonanimation(currentkey)
  {
    var activebutton = document.querySelector("."+currentkey); 
    activebutton.classList.add("pressed");
    setTimeout(function(){
      activebutton.classList.remove("pressed");},100);
  }
