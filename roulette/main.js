let win = document.querySelector('#win');

let winRed = document.querySelector('#winRed');
let winGreen = document.querySelector('#winGreen');
let winYellow = document.querySelector('#winYellow');
let winBlue = document.querySelector('#winBlue');

let winRedValue = winRed.innerText;
let winGreenValue = winGreen.innerText;
let winYellowValue = winYellow.innerText;
let winBlueValue = winBlue.innerText;

document.addEventListener('DOMContentLoaded', () => {
    
	rotateTime = 0;
	rotateAngle = 0;    
   
  center.onclick = function(){
		rotateTime = Math.floor((Math.random() * 1) + 2);
		rotateAngle = Math.floor((Math.random() * 1440) + 0);    
    // console.log('rotateTime = '+rotateTime);
    // console.log('rotateAngle = '+rotateAngle);
    center.classList.add('center-active');
    roulette.style.cssText = `
    transition: ${rotateTime}s;
    transform:rotate(${rotateAngle}deg);
    `;
    setTimeout(function() {
        removeClass(rotateAngle);
    }, rotateTime*1000);
    
 }
  
 
  
  function removeClass(){

      center.classList.remove('center-active');
      // console.log("rotateAngle = " + rotateAngle);
    
      if(rotateAngle>-45 && rotateAngle<45 || 
         rotateAngle>315 && rotateAngle<405 ||
         rotateAngle>675 && rotateAngle<765 ||
         rotateAngle>1035 && rotateAngle<1125)
      {win.innerText='RED WINS!';
       win.style.background="red";
       winRedValue ++;
       winRed.innerText = winRedValue;
       console.log('winRed = ' + winRedValue);
      }
    
      if(rotateAngle>45 && rotateAngle<135 || 
         rotateAngle>405 && rotateAngle<495 ||
         rotateAngle>765 && rotateAngle<855 ||
         rotateAngle>1125 && rotateAngle<1215)
      {win.innerText='BLUE WINS!';
       win.style.background="blue";
       winBlueValue ++;
       winBlue.innerText = winBlueValue;
       console.log('winBlue = ' + winBlueValue);
      }
    
      if(rotateAngle>135 && rotateAngle<225 || 
         rotateAngle>495 && rotateAngle<585 ||
         rotateAngle>855 && rotateAngle<945 ||
         rotateAngle>1215 && rotateAngle<1305)
      {win.innerText='YELLOW WINS!';
       win.style.background="yellow";
       winYellowValue ++;
       winYellow.innerText = winYellowValue;
       console.log('winYellow = ' + winYellowValue);
      }
    
      if(rotateAngle>225 && rotateAngle<315 || 
         rotateAngle>585 && rotateAngle<675 ||
         rotateAngle>945 && rotateAngle<1035 ||
         rotateAngle>1305 && rotateAngle<1395)
      {win.innerText='GREEN WINS!';
       win.style.background="green";
       winGreenValue ++;
       winGreen.innerText = winGreenValue;
       console.log('winGreen = ' + winGreenValue);
      }
  }
  
})