let bgredInput = document.querySelector(`#bgred`);
let bgblueInput = document.querySelector(`#bgblue`);
let bggreenInput = document.querySelector(`#bggreen`);
let bgcyanInput = document.querySelector(`#bgcyan`);
let bgallInput = document.querySelector(`#bgall`);

let bgred = document.querySelectorAll('.bgred');
let bgblue = document.querySelectorAll('.bgblue');
let bggreen = document.querySelectorAll('.bggreen');
let bgcyan = document.querySelectorAll('.bgcyan');

function howMenyBG(){
  
  bgred = document.querySelectorAll('.bgred');
  bgblue = document.querySelectorAll('.bgblue');
  bggreen = document.querySelectorAll('.bggreen');
  bgcyan = document.querySelectorAll('.bgcyan');
  
  bgredInput.value = bgred.length;
  bgblueInput.value = bgblue.length;
  bggreenInput.value = bggreen.length;
  bgcyanInput.value = bgcyan.length;
  // bgallInput.value = parseInt(bgredInput.value + bgblueInput.value + bggreenInput.value + bgcyanInput.value);
  bgallInput.value = parseInt('337'+'85');
  

}

howMenyBG();

function generateTable() {
  
  howMenyBG();
  
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < 12; i++) {
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 0; j < 19; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell.classList.add('bgred');
      cell.classList.add("row" + `${i}`);
      cell.classList.add("column" + `${j}`);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
  tbl.setAttribute("id", "text");
  tbl.classList.add('bgblue');
}

generateTable();







function clearAll(){
  
    howMenyBG();

  document.querySelector(`#text`).classList.remove('bgcyan');

  
setTimeout(() => {
  let divs = document.querySelectorAll('.bggreen');
for (var i = 0; i < divs.length; i++) {
    divs[i].classList.innerText = 'text';
    divs[i].classList.remove('bgcyan');
  // document.querySelector(`.column` + `${randomCol}`+ `.row` + `${randomRow}`).classList.add('bgblue');
  document.querySelector(`.column` + `${randomCol}`+ `.row` + `${randomRow}`).innerText = 'text';
    kuku();
}

}, "3000");
  
  
  document.querySelector(`#text`).classList.add('bgred');
  
  let divs = document.querySelectorAll('.bggreen');
  function kuku(){
      for (var i = 0; i < divs.length; i++) {
          divs[i].classList.remove('bggreen');
          divs[i].classList.remove('bgcyan');
          // divs[i].classList.remove('bgblue');
      } 
  }
 
  
  
  


  }


  // Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// clearAll();


  let randomRow = randomNumber(0, 11);
  let randomCol = randomNumber(0, 18);


function generate() {
  
  howMenyBG();
  
  let bggreenCells = document.querySelectorAll('#text .bggreen').length;
  if (bggreenCells>50){clearAll()}
  
  randomRow = randomNumber(0, 11);
  randomCol = randomNumber(0, 18);

  document.querySelector("#text").classList.remove('bgblue');
  document.querySelector("#text").classList.add('bgred');
  // document.querySelector(`.column3.row3`).classList.add('bggreen');
  document.querySelector(`.column` + `${randomCol}`+ `.row` + `${randomRow}`).classList.add('bggreen');
  document.querySelector(`.column` + `${randomCol}`+ `.row` + `${randomRow}`).classList.remove('bgblue');
  document.querySelector(`.column` + `${randomCol}`+ `.row` + `${randomRow}`).innerText = '';

console.log("randomRow: " + randomRow + " , randomCol: " + randomCol);

  
  
continues();
  function continues() {
      howMenyBG();
    setTimeout(() => {
  let bggreenCells = document.querySelectorAll('#text .bggreen').length;
  if (bggreenCells>50){clearAll()};
      continues();
      // let randomRowDelta = randomNumber(-1, 1);
      // let randomColDelta = randomNumber(-1, 1);
      let randomRowDelta = randomNumber(-1, 2);
      let randomColDelta = randomNumber(-1, 2);
      // randomRow = 1;
      // randomCol = 0;
      randomRow = randomRow + randomRowDelta;
      randomCol = randomCol + randomColDelta;
      document.querySelector(`.column` + `${randomCol}`+ `.row` + `${randomRow}`).classList.add('bggreen');
      document.querySelector(`.column` + `${randomCol}`+ `.row` + `${randomRow}`).classList.add('bgblue');
      console.log("randomRow: " + randomRow + " , randomCol: " + randomCol);
    }, "100");  
  }
};



const text = document.querySelector('#text');
  text.addEventListener('click', function(e) {
      howMenyBG();
      console.log(e.target);
      let etarget = e.target;
      etarget.classList.add('bgcyan');
  })