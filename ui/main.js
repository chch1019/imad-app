//counter code

var button = document.getElementById('counter');
counter =0;
button.onClick = function(){
   
   // Make a request to the counter end point
   
   //capture the response and store it in a variable
   
   // Render the variable in a correct span
   counter = counter +1;
   var span= getElementById('count');
   span.innerHTML = counter.toString();
};