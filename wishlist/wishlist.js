let wishlistData= JSON.parse(localStorage.getItem("wishlist_product_local"))||[];

appendData(wishlistData);


import {navbarim,navbarim1} from "../navbarforshopperstop/components/navbarimport.js";


import {footer} from "../landingPage/Components/footer.js";

document.getElementById("main").innerHTML=navbarim();
document.getElementById("main1").innerHTML=navbarim1();
document.getElementById("footer").innerHTML=footer();

function appendData(data) {
    // document.querySelector(".loading").style.display = "none";
    document.getElementById("show_product").innerHTML="";
    let div = document.createElement("div");
    div.setAttribute("class", "loading");
    data.map((ele,index) => {
  
      let card = document.createElement("div");
      card.setAttribute("id", "card");
  
      
  
      let img_div = document.createElement("div");
      img_div.setAttribute("id", "parent_img");
      let img = document.createElement("img");
      img.src = ele.img;
      img.style.width = "100%";
  
      img_div.append(img);
  
      let title = document.createElement("h6");
      title.innerText = ele.brand;
      title.setAttribute("id","title");
  
  
      let desc = document.createElement("p");
      desc.innerText = ele.name;
      desc.setAttribute("id","description");
  
      let price_parent=document.createElement("div");
      price_parent.setAttribute("id","price_parent");
      let price = document.createElement("h6");
      price.innerText = "₹ " + ele.price1;
       
      let price1 = document.createElement("p");
      
      price1.innerText = "₹ " + ele.price2;
  
      if(price1.innerText=="₹ undefined")
      {
        price1.innerText="₹ 6000";
      }
  
      price1.setAttribute("id","striked_price");
  
      let rating = document.createElement("h4");
      rating.innerText = ele.rating;
  
      let discount=document.createElement("p");
      discount.innerText=ele.discount+"% off";
      discount.setAttribute("id","discount");
      price_parent.append(price,price1,discount);

      let moveToBag=document.createElement("div")
      moveToBag.id="Move_To_Bag"
      moveToBag.innerText="Move To Bag";
     
      card.append(img_div,title,desc,price_parent,moveToBag);

      moveToBag.addEventListener("click",() =>{
        localStorage.setItem("wishlistToCartProtuct_s", JSON.stringify(ele));
        var arrayy = JSON.parse(localStorage.getItem("wishlistToCartProtuct_s")) || [];
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
          data.splice(index,1)
          localStorage.setItem("wishlist_product_local",JSON.stringify(data));
          appendData(data);
        }
      })
  
      img_div.addEventListener("click",function()
      {
        let arr=[];
        arr.push(ele);
        localStorage.setItem("target_product",JSON.stringify(arr[0]));
        
        location.href="../productdescription/page.html";
  
      })
  
      document.getElementById("show_product").prepend(card);
  
    })

  }
  