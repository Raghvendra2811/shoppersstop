// function newconatiner(){
//     document.getElementById('luxeonhover').innerHTML = ''; 
//     var maindiv = document.createElement('div');
//     var div1 = document.createElement('div');
//     div1.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
//     document.getElementById('luxeonhover').append(div1);


// }


import{navbarim} from '../components/navbarimport.js';
import{navbarim1} from '../components/navbarimport.js';

document.getElementById('main').innerHTML = navbarim();
document.getElementById('main1').innerHTML = navbarim1();
 let color1 = document.getElementById('luxe2345');
color1.style.color = '#D3A84F';


var searchfromhomepage =  document.getElementById('searchfunction');
searchfromhomepage.addEventListener('keypress', getsearchaname)
function getsearchaname(danny){
    if(danny.key === 'Enter')
    {
        var sarchedname = document.getElementById('searchfunction').value;
        localStorage.setItem('Productsearched',JSON.stringify(sarchedname));
        document.getElementById('searchfunction').value = "";
      location.href = "../product/product.html";
    }  
}
document.getElementById('searchfunctionbybutton').addEventListener('click',Bybutton);

function Bybutton(){
    // var getproductfromsearch = document.getElementById('searchfunction').value;
    // localStorage.setItem('Productsearched',JSON.stringify(getproductfromsearch));
    // document.getElementById('searchfunction').value = '';
    // location.href = "../../product/product.html";
    var reco = new webkitSpeechRecognition();
  reco.lang = "en-GB";
  reco.onresult = function (event) {
    console.log(event.results[0][0].transcript, " recond");
    document.getElementById("searchfunction").value = event.results[0][0].transcript;
    // search(event.results[0][0].transcript);
  };
  reco.start();
}


const hamburger = document.getElementById('hamburger');
const Navmenu = document.getElementById('nav-menu');
const Navmenu1 = document.getElementById('nav-menu1');
const x12 = document.getElementById('searchfunction');
hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    Navmenu.classList.toggle('active');
    Navmenu1.classList.toggle('active');
    x12.classList.toggle('active');  
})



let flag234 = localStorage.getItem('flag_g');
if(flag234==='true')
{
  var getlogindisplay = document.getElementById('navbarpart4');
  getlogindisplay.style.display = 'flex';
  var iconsss = document.getElementById('openmodal');
  iconsss.style.display = 'none';

}
else
{
  var getlogindisplay = document.getElementById('navbarpart4');
  getlogindisplay.style.display = 'none';
  var iconsss = document.getElementById('openmodal');
  iconsss.style.display = 'flex';
}





document.getElementById('dropdownlogout').addEventListener("click", () => {

  localStorage.setItem('flag_g',"false");
  localStorage.setItem('user_n_ame',"");
  localStorage.setItem('cartprotuct_s',JSON.stringify([]));
  location.href = '../index.html'

})
document.getElementById('storeinls').addEventListener('click', addtolocal);
function addtolocal() {
  var ls0 = document.getElementById('storeinls').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls0));
  location.href = "../product/product.html";

}
document.getElementById('storeinls1').addEventListener('click', addtolocal1);
function addtolocal1() {
  var ls1 = document.getElementById('storeinls1').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls1));
  location.href = "../product/product.html";
}
document.getElementById('storeinls2').addEventListener('click', addtolocal2);
function addtolocal2() {
  var ls2 = document.getElementById('storeinls2').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls2));
  location.href = "../product/product.html";
}
document.getElementById('storeinls3').addEventListener('click', addtolocal3);
function addtolocal3() {
  var ls3 = document.getElementById('storeinls3').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls3));
  location.href = "../product/product.html";
}
document.getElementById('storeinls4').addEventListener('click', addtolocal4);
function addtolocal4() {
  var ls4 = document.getElementById('storeinls4').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls4));
  location.href = "../product/product.html";
}
document.getElementById('storeinls5').addEventListener('click', addtolocal5);
function addtolocal5() {
  var ls5 = document.getElementById('storeinls5').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls5));
  location.href = "../product/product.html";
}
document.getElementById('storeinls6').addEventListener('click', addtolocal6);
function addtolocal6() {
  var ls6 = document.getElementById('storeinls6').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls6));
  location.href = "../product/product.html";
}
document.getElementById('storeinls7').addEventListener('click', addtolocal7);
function addtolocal7() {
  var ls7 = document.getElementById('storeinls7').innerText;
  localStorage.setItem('Productsearched',JSON.stringify(ls7));
  location.href = "../product/product.html";
}









// document.getElementById('hoomestop').addEventListener('mouseover', () =>{
//   let hoome = document.getElementById('watchesonhover')
//    hoome.style.display = 'block';
//    hoome.style.position = 'absolute';
//    hoome.style.zIndex = '10';
//    hoome.style.backgroundColor = 'white';
// })

// document.getElementById('hoomestop').addEventListener('mouseout', () =>{
//     let hoome = document.getElementById('watchesonhover')
//      hoome.style.display = 'none';
     
//   })



let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.getElementById("navbarline1part2").addEventListener("click",()=>{
  location.href="../../index.html";
})

let  count =JSON.parse(localStorage.getItem("cartprotuct_s"))||[];

document.querySelector(".noi").innerText=count.length
