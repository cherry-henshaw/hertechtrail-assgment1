let myButton = document.getElementById("myButton");
let myBodyElement = document.getElementById("body");
let popUp = document.getElementById("pop-up");
let indexNumber = 0
let table = document.getElementById("table");
let footer = document.getElementById("footer")
myButton.addEventListener("click", myFunction);

function myFunction(){
  const bgColor = ["yellow","green", "orange", "blue", "red", "0"];
   myBodyElement.style.background = bgColor[indexNumber];
   indexNumber++;
   footer.classList.remove("remove-bg");
   if(indexNumber === bgColor.length) {
    indexNumber = 0;
    myBodyElement.style.background = indexNumber[6];
    
    table.classList.remove("my-table");
    table.style.margin = "auto";
    footer.classList.add("remove-bg");
    
   }
   else if( table.classList.remove){
    table.classList.add("my-table")
   }
  
}


