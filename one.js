let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let TOB9AL = document.querySelector('.TOB9AL');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value*3 +'px';
    boat.style.top = value  +'px';
    boat.style.left = value  +'px';
    mountains3.style.top = value +'px';
    mountains4.style.top = value +'px';
    river.style.top = value +'px';
    
}

