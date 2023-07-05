const button = document.querySelector("button");
const gridContainer = document.getElementById("gridContainer");
const boxSize = document.querySelector(".boxSize")
//create the grid function
function createGrid(){
    const input = parseInt(document.getElementById("input").value);
    
     boxSize.textContent = `SIZE OF SQUARE: ${input}px X ${input}px;` ;
    //empty the gridContainer
    gridContainer.innerHTML="";

    //set css custom property;
    gridContainer.style.setProperty("--box-size",input);

    //calculate how many boxes cn fit there
    for(let i = 0; i < input*input; i++){
        let Box = document.createElement("div");
        Box.classList.add("box")
        gridContainer.appendChild(Box);
    }
}

//add event listener to the button
button.addEventListener("click",createGrid);

//disable the button once clicked


const btn = document.querySelector(".select");

//select the colors to be displayed in an array
const colors= ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF" ,"purple","grey","orange",
"blue","green","skyBlue","crown","violet","indigo","yellow"];
let colorPlate = document.querySelector(".colorPlate");
//function create color plate;
function createColorPlate(){
  
    for(let i = 0; i < colors.length; i++){
    let color = colors[i];

    //create the boxes holding the colors
    let newBox = document.createElement("div");
    newBox.style.backgroundColor = color;
    newBox.classList.add("newBox");
    
    //set an event listener to them
    newBox.addEventListener("click",function(){
     setColorActive(this.style.backgroundColor)
    });

 //append the created child to the color plate;
   colorPlate.appendChild(newBox);
   }
}
//lets set color active to where to paint it
function setColorActive(color) {
    function handleClick() {
      this.style.backgroundColor = color;
      this.removeEventListener("click", handleClick);
    }
  let Box = document.getElementsByClassName("box");
    for (let i = 0; i < Box.length; i++) {
     Box[i].addEventListener("mouseover", handleClick);
    }
  }
 //add Event listener to Select button;

btn.addEventListener("click",createColorPlate)

const Restart = document.querySelector(".Restart");
Restart.addEventListener("click",reset);

function reset(){
    colorPlate.innerHTML = "";
    gridContainer.innerHTML = "";
    boxSize.innerHTML = "";
    input.innerHTML = "";
}