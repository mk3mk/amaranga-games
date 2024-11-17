let body = document.querySelector(`body`);
let divs = document.querySelectorAll('.bggold');

let i = 1/25;
let deltaX;
let deltaY;
let deltaDeg;

let randomLength = randomNumber(3, 7);
let randomRotate = randomNumber(3, 7);

console.log(randomLength);

// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function main(deltaX, deltaY, deltaDeg){
  deltaX = i*randomNumber(-7, 7);
  deltaY = i*randomNumber(-7, 7);
  deltaDeg = i*randomNumber(-7, 27);
  const cube5050 = document.createElement("div");
  cube5050.classList.add('bggold');
  cube5050.classList.add('cube5050');
  cube5050.style.cssText = `transform: translate(${deltaX}px, ${deltaY}px) rotate(${deltaDeg}deg); transition: 0.25s;`;
  setTimeout(() => {
    divs = document.querySelectorAll('.bggold');
    if (divs.length<randomLength){
          body.append(cube5050);
          i = i + randomLength / 12;
          main();
    }else{

      let Cubes5050 = document.querySelectorAll(".cube5050");
      const lastCube5050 = Cubes5050[Cubes5050.length - 1];
      // console.log(lastCube5050);
      let lastCube5050coordinates = lastCube5050.getBoundingClientRect();
      console.log(lastCube5050coordinates.top, lastCube5050coordinates.right, lastCube5050coordinates.bottom, lastCube5050coordinates.left);
      Cubes5050.forEach(element => {
          element.classList.remove('bggold');
      });
      // lastCube5050.style.position = "absolute";
      lastCube5050.style.left = lastCube5050coordinates.left+'px';
      lastCube5050.style.top = lastCube5050coordinates.top+'px';
      
      if (lastCube5050coordinates.top > 100 & lastCube5050coordinates.right > 100 & lastCube5050coordinates.bottom > 100 & lastCube5050coordinates.left > 100){
        lastCube5050coordinates.top = 0;
        lastCube5050coordinates.right = 0; 
        lastCube5050coordinates.bottom = 0;
        lastCube5050coordinates.left = 0;
      }
      
      main();
    }
  }, "100");
}
main();





