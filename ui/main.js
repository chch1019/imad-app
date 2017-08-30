//counter code

var button = document.getElementById('counter');

button.onclick = function(){
   
   // create request object
   var request = new XMLHttpRequest();  
   
   //capture the response and store it in a variable
   
   request.onreadystatechange = function(){
     if (request.readyState === XMLHttpRequest.Done) {
         // take same action
         if (request.status === 200){
             var counter = request.responseText;
             var span= document.getElementById('count');
             span.innerHTML = counter.toString();
         }
     } 
   };
   //make request
   request.open ('GET', 'http://chchaitanya94.imad.hasura-app.io/counter', true);
   request.send(null);
};