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
location.href="../../product/product.html";
    }  
}
document.getElementById('searchfunctionbybutton').addEventListener('click',Bybutton);

function Bybutton(){
    var getproductfromsearch = document.getElementById('searchfunction').value;
    localStorage.setItem('Productsearched',JSON.stringify(getproductfromsearch));
    document.getElementById('searchfunction').value = '';
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


// document.querySelectorAll('.storeinls').addEventListener('click',()=>{
//     var getitpart2 = event.target.innerText;
//     console.log(getitpart2)
    
//     localStorage.setItem('Productsearched',JSON.stringify(getitpart2));
// });
// function addtolocal(){
//    var getitpart3 = document.querySelector('.storeinls').innerText;
//    console.log(getitpart3)
//    localStorage.setItem('Productsearched',JSON.stringify(getitpart3));

// }





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