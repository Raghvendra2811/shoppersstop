// import { navbar } from "../navbarforshopperstop/components/navbarimport.js";
import { footer } from "../landingPage/Components/footer.js";

document.getElementById("discription_footer").innerHTML = footer();
// document.getElementById("").innerHTML=navbar();

document.getElementById("sizess1").addEventListener("click", () => {
  // console.log("helo2")
  document.getElementById("sizess1").style.backgroundColor = "black";
  document.getElementById("sizess1").style.color = "white";

  document.getElementById("sizess2").style.backgroundColor = "white";
  document.getElementById("sizess2").style.color = "black";

  document.getElementById("sizess3").style.backgroundColor = "white";
  document.getElementById("sizess3").style.color = "black";

  document.getElementById("sizess4").style.backgroundColor = "white";
  document.getElementById("sizess4").style.color = "black";

  document.getElementById("sizess5").style.backgroundColor = "white";
  document.getElementById("sizess5").style.color = "black";
});
document.getElementById("sizess2").addEventListener("click", () => {
  // console.log("helo2")
  document.getElementById("sizess2").style.backgroundColor = "black";
  document.getElementById("sizess2").style.color = "white";

  document.getElementById("sizess1").style.backgroundColor = "white";
  document.getElementById("sizess1").style.color = "black";

  document.getElementById("sizess3").style.backgroundColor = "white";
  document.getElementById("sizess3").style.color = "black";

  document.getElementById("sizess4").style.backgroundColor = "white";
  document.getElementById("sizess4").style.color = "black";

  document.getElementById("sizess5").style.backgroundColor = "white";
  document.getElementById("sizess5").style.color = "black";
});

document.getElementById("sizess3").addEventListener("click", () => {
  // console.log("helo2")
  document.getElementById("sizess3").style.backgroundColor = "black";
  document.getElementById("sizess3").style.color = "white";

  document.getElementById("sizess1").style.backgroundColor = "white";
  document.getElementById("sizess1").style.color = "black";

  document.getElementById("sizess2").style.backgroundColor = "white";
  document.getElementById("sizess2").style.color = "black";

  document.getElementById("sizess4").style.backgroundColor = "white";
  document.getElementById("sizess4").style.color = "black";

  document.getElementById("sizess5").style.backgroundColor = "white";
  document.getElementById("sizess5").style.color = "black";
});

document.getElementById("sizess4").addEventListener("click", () => {
  // console.log("helo2")
  document.getElementById("sizess4").style.backgroundColor = "black";
  document.getElementById("sizess4").style.color = "white";

  document.getElementById("sizess1").style.backgroundColor = "white";
  document.getElementById("sizess1").style.color = "black";

  document.getElementById("sizess2").style.backgroundColor = "white";
  document.getElementById("sizess2").style.color = "black";

  document.getElementById("sizess3").style.backgroundColor = "white";
  document.getElementById("sizess3").style.color = "black";

  document.getElementById("sizess5").style.backgroundColor = "white";
  document.getElementById("sizess5").style.color = "black";
});

document.getElementById("sizess5").addEventListener("click", () => {
  // console.log("helo2")
  document.getElementById("sizess5").style.backgroundColor = "black";
  document.getElementById("sizess5").style.color = "white";

  document.getElementById("sizess2").style.backgroundColor = "white";
  document.getElementById("sizess2").style.color = "black";

  document.getElementById("sizess3").style.backgroundColor = "white";
  document.getElementById("sizess3").style.color = "black";

  document.getElementById("sizess4").style.backgroundColor = "white";
  document.getElementById("sizess4").style.color = "black";

  document.getElementById("sizess1").style.backgroundColor = "white";
  document.getElementById("sizess1").style.color = "black";
});

var arrayy = JSON.parse(localStorage.getItem("target_product"));

console.log(arrayy);

function displayDisciption() {
  document.getElementById("disImg").src = arrayy.img;
  document.getElementById("prieee").innerText = arrayy.price1;
  document.getElementById("prieee2").innerText = arrayy.price2;
  document.getElementById("redeeee").innerText = arrayy.discount;
  document.getElementById("bran").innerText = arrayy.brand;
  document.getElementById("pronamee").innerText = arrayy.name;
document.querySelector("title").innerText=arrayy.name;

  document.getElementById("ratinss").innerText = arrayy.rating;
}

displayDisciption();

document.getElementById("addTocart").addEventListener("click", () => {
  
  var pro = JSON.parse(localStorage.getItem("cartprotuct_s")) || [];
  let AddorNot = false;
  for (let i = 0; i < pro.length; i++) {
    if (pro[i].id == arrayy.id) {
      AddorNot = true;
      alert("already added in cart");
    }
  }

  if (!AddorNot) {
    pro.push(arrayy);
    localStorage.setItem("cartprotuct_s", JSON.stringify(pro));
    let  count =JSON.parse(localStorage.getItem("cartprotuct_s"))||[];

document.querySelector(".noi").innerText=count.length

  }
  // document.getElementById("addTocart").innerText = "Edit to cart";

  // }
  // });
});
