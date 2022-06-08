// clear all the values from the display 
function clearScreen() {
    document.getElementById("result").value = "";
   }

   // this function displays values 
   function display(value) {
    document.getElementById("result").value += value;
   }

   // this function evaluates the values 
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }