console.log('Loaded!');
//change the text of main text div

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// move the Image]

var img = document.getElementById('chaitu');
marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft+ "px";
    
} 
img.onclick = function (){
    var interval = setInterval (moveRight, 25);
};