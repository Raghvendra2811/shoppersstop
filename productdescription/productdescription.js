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
  document.querySelector("title").innerText = arrayy.name;

  document.getElementById("ratinss").innerText = arrayy.rating;
}

displayDisciption();

document.getElementById("addTocart").addEventListener("click", () => {
  var pro = JSON.parse(localStorage.getItem("cartprotuct_s")) || [];
  let AddorNot = false;
  for (let i = 0; i < pro.length; i++) {
    if (pro[i].id == arrayy.id) {
      AddorNot = true;
      let s = document.getElementById("alertts");
      s.innerText = "already added in cart";
      s.style.display = "flex";
      s.style.backgroundColor = "red";

      setTimeout(() => {
        document.getElementById("alertts").style.display = "none";
      }, 1200);
    }
  }

  if (!AddorNot) {
    let s = document.getElementById("alertts");
    s.innerText = "Added in cart";
    s.style.display = "flex";
    s.style.backgroundColor = "Green";

    setTimeout(() => {
      document.getElementById("alertts").style.display = "none";
    }, 1200);
    pro.push(arrayy);
    localStorage.setItem("cartprotuct_s", JSON.stringify(pro));
    let count = JSON.parse(localStorage.getItem("cartprotuct_s")) || [];

    document.querySelector(".noi").innerText = count.length;
  }
  // document.getElementById("addTocart").innerText = "Edit to cart";

  // }
  // });
});

document.getElementById("moveToWishlist").addEventListener("click", () => {
  var wishlist_Product =
    JSON.parse(localStorage.getItem("wishlist_product_local")) || [];
  let AddorNotinWishlist = false;
  for (let i = 0; i < wishlist_Product.length; i++) {
    if (wishlist_Product[i].id == arrayy.id) {
      AddorNotinWishlist = true;
      // alert("already added in Wishlist");

      let s = document.getElementById("alertts");
      s.innerText = "already added in Wishlist";
      s.style.display = "flex";
      s.style.backgroundColor = "red";

      setTimeout(() => {
        document.getElementById("alertts").style.display = "none";
      }, 1200);
    }
  }

  if (!AddorNotinWishlist) {
    wishlist_Product.push(arrayy);
    localStorage.setItem(
      "wishlist_product_local",
      JSON.stringify(wishlist_Product)
    );

    let s = document.getElementById("alertts");
    s.innerText = "Added in Wishlist";
    s.style.display = "flex";
    s.style.backgroundColor = "green";

    setTimeout(() => {
      document.getElementById("alertts").style.display = "none";
    }, 1200);
  }
});
