var t=new Date();
var dstr=t.toDateString();
document.querySelector(".hand").innerHTML=dstr;
   
function timeStr(){    
var t=new Date();
var ltstr=t.toLocaleTimeString();
document.querySelector(".hand1").innerHTML=ltstr;
  }
setInterval(timeStr,1) 

// time
const d = new Date();
let year = d.getFullYear();
document.querySelector(".demo").innerHTML = year;

// 

// function changeMe(){
//     const nav = document.querySelector("nav-images");

//     const img = document.querySelector("img");

//     if(nav-images.style.display =="block"){
//         nav.style.display = "none";
//         img.scr = "/images/list.svg";
//     }else{
//         nav.style.display = "block";
//         img.src = "/images/x-lg.svg";
//     }
// }

const imgIcon = document.querySelector('#icon-img')
const navIcon = document.querySelector('nav')
const navImages = document.querySelector('.nav-images')

navImages.onclick = function(){
    if(navIcon.style.display == 'block'){
      navIcon.style.display = 'none';
      imgIcon.src = '/images/list.svg';
    }else{
      navIcon.style.display = 'block';
      imgIcon.src = '/images/x-lg.svg'
    }
}