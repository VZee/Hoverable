//variable declarations
var first = true;
var num = 10;
var newNum = 10;
var gridHeight = 500;
var gridWidth = 500;
var height;
var width;
var container;

$(document).ready(function(){
  create();
});

function create(){
  num = newNum;
  height = (gridHeight)/num;
  width = (gridWidth)/num;

  //create the grid
  grid();
}

function grid(){
  //create the initial container
  if(first){
    container = document.createElement("div");
    container.id = "container";
    container.className = "grid";
    document.body.appendChild(container);
    first = false;
  }

  for(var i = 0; i < num; i++) {
  //create a new row
    var row = document.createElement("div");
    row.id = "row" + i;
    container.appendChild(row);
    var activeRow = document.getElementById("row" + i);
    for(var j = 0; j < num; j++) {
      //add the grid squares to that row
      var gridItem = document.createElement("div");
      gridItem.id = "r" + i + "c" + j;
      gridItem.className = "item";
      gridItem.style.width = width  + "px";
      gridItem.style.height = height + "px";

      gridItem.addEventListener("mouseover", function(event) {
        //change the background color of the grid item
        if(event.target.style.backgroundColor !== "rgb(1, 60, 178)"){
          event.target.style.backgroundColor = "#013cb2";
        }
        else if(event.target.style.backgroundColor === "rgb(1, 60, 178)"){
          event.target.style.backgroundColor = "white";
        }
      });

      activeRow.appendChild(gridItem);
    }
  }

  return container;
}

function resetGrid(){
  //hide all existing squares
  for(var k = 0; k < num; k++){
    for(var l = 0; l < num; l++){
      document.getElementById("r" + k + "c" + l).remove();
    }
  }
  document.getElementById("clear").className = "hide";
  document.getElementById("userNum").className = "show";
  document.getElementById("submit").className = "show";
}

function userChoice(){
  //ask the user how many rows they would like
  newNum = document.getElementById("userNum").value;

  document.getElementById("clear").className = "show";

  document.getElementById("userNum").classList.remove("show");
  document.getElementById("submit").classList.remove("show");
  document.getElementById("userNum").classList.add("hide");
  document.getElementById("submit").classList.add("hide");

  document.getElementById("userNum").value = "";

  //reset to the default if anything other than a number is entered
  if(isNaN(newNum) || newNum === "" || newNum === " "){newNum = 10;}

  //create the grid
  create();
}
