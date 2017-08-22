console.log('Loaded!');
//change the text of main text div

var element = getElememtById('main-text');

element.innerHTML = 'New value';

// move the Image]

var img = getElementById('chaitu');
img.onclick = function (){
    
    img.style.marginLeft = '100px';
    
};