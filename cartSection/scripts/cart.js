

import {footer} from "../../landingPage/Components/footer.js";

document.getElementById("cart_footer").innerHTML=footer();



//cartproduct_s

var cartProducts = JSON.parse(localStorage.getItem("cartprotuct_s")) || [];
// let obj = {
//   qty : 1
// };
// for(var i=0; i<cartProducts.length; i++){
//   var newEle = cartProducts[i];
//   newEle.qty=1;
// }
  // localStorage.setItem("cartprotuct_s", JSON.stringify(cartProducts));

console.log("carttt:", cartProducts);

document.getElementById("emptyCart").style.display="none";

var radioBtns=document.querySelectorAll("input[name='delivery']");
var aboutradio=document.getElementById("radioresult");
var selected;
        
function  findselected(){
    radioBtns.forEach(function(radio,idx) {
        if(radio.checked && idx==0){
            console.log(idx);
            aboutradio.innerText="Typically delivers between 3-5 days";
            aboutradio.style.color="green";
            selected=radio.value;
            cartProducts.map(function(ele,indx){

            })

        }
        else if(radio.checked && idx==1){
            aboutradio.innerText="Typically delivers between 4 to 24 hours*   None of the items in your cart are available for express delivery, please change the delivery mode to place the order"
            aboutradio.style.color="green";
            // selected.innerText=radio.value;
            selected=radio.value;
            cartProducts.map(function(ele,indx){
                document.getElementById("middle2first").lastChild.remove();
            })
            document.getElementById("middle2second").lastChild.remove();
           
            displayProducts(cartProducts,radio.value);
            radio[0].checked=false;    
        }
        else if(radio.checked && idx==2){
            aboutradio.innerText="Pick up products from your nearest store*"
            aboutradio.style.color="green";
            selected=radio.value;
            cartProducts.map(function(ele,indx){
                document.getElementById("middle2first").lastChild.remove();
            })
            document.getElementById("middle2second").lastChild.remove();
                displayProducts(cartProducts,radio.value);
                radio[0].checked=false;
        }
    })     
}
     
    
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change",findselected);
});
findselected();

displayProducts(cartProducts,"Standard Delivery");

  function displayProductsprice(items,sum,profit){

    

    var totalsum = items.reduce(function (acc, ele, index) {
      return acc + ele.price1*(ele.qty || 1);
    }, 0);
    var billingboxdiv = document.createElement("div");
    billingboxdiv.setAttribute("id", "billingbox");
    var billingboxdiv1 = document.createElement("div");
    var billingboxdiv1h3 = document.createElement("h3");
    billingboxdiv1h3.innerText = "Order Summary";
    billingboxdiv1.append(billingboxdiv1h3);
    var billingboxdiv2 = document.createElement("div");
    var billingboxdiv2h4 = document.createElement("h4");
    billingboxdiv2h4.setAttribute("id", "itemchoosedprice");
    billingboxdiv2h4.innerText = "₹"+totalsum; 
    var billingboxdiv2P = document.createElement("p");
    billingboxdiv2P.innerText = "Sub total";
    billingboxdiv2.append(billingboxdiv2P, billingboxdiv2h4);
    var billingboxdiv4 = document.createElement("div");
    var billingboxdiv4P = document.createElement("p");
    billingboxdiv4P.innerText = "Coupon discount";
    var billingboxdiv4h3 = document.createElement("h3");
    billingboxdiv4h3.innerText = "Apply Coupon";
    billingboxdiv4.append(billingboxdiv4P, billingboxdiv4h3);
    var billingboxdiv3 = document.createElement("div");
    var billingboxdiv3P1 = document.createElement("p");
    billingboxdiv3P1.innerText = "Delivery Charges";
    var billingboxdiv3P2 = document.createElement("p");
    billingboxdiv3P2.setAttribute("id", "deliverybenefit");
    billingboxdiv3P2.innerText = "Free";
    billingboxdiv3.append(billingboxdiv3P1, billingboxdiv3P2);
    var billingboxdiv5 = document.createElement("div");
    var billingboxdiv5h3 = document.createElement("h3");
    billingboxdiv5h3.innerText = "Total Price";
    var billingboxdiv5h4 = document.createElement("h4");
    billingboxdiv5h4.setAttribute("id", "itemchoosedtotal");
    billingboxdiv5h4.innerText = "₹"+sum;
    localStorage.setItem("sum",JSON.stringify( sum));
    billingboxdiv5.append(billingboxdiv5h3, billingboxdiv5h4);
    var billingboxdiv6 = document.createElement("div");
    var billingboxdiv6P1 = document.createElement("p");
    billingboxdiv6P1.innerText = "Total Saving";
    var billingboxdiv6P2 = document.createElement("p");
    billingboxdiv6P2.innerText = "₹"+profit;
    localStorage.setItem("profit", profit);
    billingboxdiv6.append(billingboxdiv6P1, billingboxdiv6P2);
    var billingboxdiv7 = document.createElement("div");

    // billingboxdiv7.setAttribute("id", "checkBtnn");

    // document.getElementById("checkBtnn").addEventListener("click", function(){
    //   openCheckoutPage();
    // });
    var billingboxdiv7h4 = document.createElement("h4");
    billingboxdiv7h4.setAttribute("id", "checkoutboxx");
    billingboxdiv7h4.innerText = "CHECKOUT";
    billingboxdiv7.append(billingboxdiv7h4);
    var billingboxdiv8 = document.createElement("div");
    var billingboxdiv8P1 = document.createElement("p");
    billingboxdiv8P1.innerText = "No Delivery charges for Express Store Pickup.";
    var billingboxdiv8P2 = document.createElement("p");
    billingboxdiv8P2.innerText="you have a gift card or and electronic gift voucher? Use it at the payment page."
    billingboxdiv8.append(billingboxdiv8P1,billingboxdiv8P2);
    billingboxdiv.append(
      billingboxdiv1,
      billingboxdiv2,
      billingboxdiv3,
      billingboxdiv4,
      billingboxdiv5,
      billingboxdiv6,
      billingboxdiv7,
      billingboxdiv8
    );
    document.getElementById("middle2second").append(billingboxdiv);

    document.getElementById("checkoutboxx").addEventListener("dblclick", openCheckoutPage);
    function openCheckoutPage(){
      location.href="../pages/checkout.html";
    }

  }
  function displayProducts(items,radiop) {


    if(items.length===0){
      document.getElementById("emptyCart").style.display="block";
      document.getElementById("middle").style.display="none";
    }else{
      document.getElementById("itemCnt").innerText=items.length;
    }
  


    items.map(function (el, idx) {

      

      localStorage.setItem("cartProduct",JSON.stringify)
      var cartItemDiv = document.createElement("div");
      cartItemDiv.setAttribute("id", "cartitems");
      var itemimgdiv = document.createElement("div");
      itemimgdiv.setAttribute("id", "itemimage");
      var itemimage = document.createElement("img");
      itemimage.setAttribute("src", el.img);
      itemimgdiv.append(itemimage);
      var aboutitemdiv = document.createElement("div");
      aboutitemdiv.setAttribute("id", "aboutitem");
      var h3name = document.createElement("h3");
      h3name.setAttribute("id", "brandname");
      h3name.innerText = el.brand;
      var pnamee = document.createElement("p");
      pnamee.setAttribute("id", "branddescrip");
      pnamee.innerText = el.name;
      var spandivparent = document.createElement("div");

      var spandivparent2 = document.createElement("div");
      var span3 = document.createElement("span");
      span3.innerText = "Qty:";
      var span4 = document.createElement("span");
      var sizeinput2=document.createElement("select");
      sizeinput2.setAttribute("id","quantity");
      sizeinput2.addEventListener("change",function(){
        changeqty(el,items);
      })
      var option1=document.createElement("option");
      option1.innerText="1";
       var option2=document.createElement("option");
      option2.innerText="2";
      var option3=document.createElement("option");
      option3.innerText="3";
      var option4=document.createElement("option");
      option4.innerText="4";
      sizeinput2.append(option1,option2,option3,option4)
       sizeinput2.value = el.qty || 1;
    span4.append(sizeinput2);
      spandivparent2.append(span3, span4);
      spandivparent.append(spandivparent2);
      var removeh2 = document.createElement("h2");
      removeh2.setAttribute("id", "remove");
      removeh2.innerText = "Remove";
      removeh2.addEventListener("click",function(){
        removecartItem(idx);
      });
      var wishh2 = document.createElement("h2");
      wishh2.setAttribute("id", "wishlist");
      // wishh2.innerText = "Move To Wishlist";
        var deliveryopt=document.createElement("h5");
        deliveryopt.innerText=radiop;
      deliveryopt.setAttribute("id","deliveryoption");


        aboutitemdiv.append(h3name, pnamee, spandivparent,deliveryopt, removeh2, wishh2);
        var itempricediv = document.createElement("div");
      itempricediv.setAttribute("id", "itemprice");
      var pricespan = document.createElement("span");
      pricespan.setAttribute("id", "price");
      pricespan.innerText = "₹"+el.price1*(el.qty || 1);
      itempricediv.append(pricespan);
      cartItemDiv.append(itemimgdiv, aboutitemdiv, itempricediv);
      document.getElementById("middle2first").append(cartItemDiv);
    });
    var totalsum = items.reduce(function (acc, ele, index) {
      return acc + ele.price1*(ele.qty || 1);
    }, 0);
    var billingboxdiv = document.createElement("div");
    billingboxdiv.setAttribute("id", "billingbox");
    var billingboxdiv1 = document.createElement("div");
    var billingboxdiv1h3 = document.createElement("h3");
    billingboxdiv1h3.innerText = "Order Summary";
    billingboxdiv1.append(billingboxdiv1h3);
    var billingboxdiv2 = document.createElement("div");
    var billingboxdiv2h4 = document.createElement("h4");
    billingboxdiv2h4.setAttribute("id", "itemchoosedprice");
    billingboxdiv2h4.innerText = "₹"+totalsum;
    var billingboxdiv2P = document.createElement("p");
    billingboxdiv2P.innerText = "Sub total";
    billingboxdiv2.append(billingboxdiv2P, billingboxdiv2h4);
    var billingboxdiv4 = document.createElement("div");
    var billingboxdiv4P = document.createElement("p");
    billingboxdiv4P.innerText = "Coupon discount";
    var billingboxdiv4h3 = document.createElement("h3");
    billingboxdiv4h3.innerText = "Apply Coupon";
    billingboxdiv4.append(billingboxdiv4P, billingboxdiv4h3);
    var billingboxdiv3 = document.createElement("div");
    var billingboxdiv3P1 = document.createElement("p");
    billingboxdiv3P1.innerText = "Delivery Charges";
    var billingboxdiv3P2 = document.createElement("p");
    billingboxdiv3P2.setAttribute("id", "deliverybenefit");
    billingboxdiv3P2.innerText = "Free";
    billingboxdiv3.append(billingboxdiv3P1, billingboxdiv3P2);
    var billingboxdiv5 = document.createElement("div");
    var billingboxdiv5h3 = document.createElement("h3");
    billingboxdiv5h3.innerText = "Total Price";
    var billingboxdiv5h4 = document.createElement("h4");
    billingboxdiv5h4.setAttribute("id", "itemchoosedtotal");
    billingboxdiv5h4.innerText = "₹"+totalsum;
    billingboxdiv5.append(billingboxdiv5h3, billingboxdiv5h4);
    var billingboxdiv6 = document.createElement("div");
    var billingboxdiv6P1 = document.createElement("p");
    billingboxdiv6P1.innerText = "Total Saving";
    var billingboxdiv6P2 = document.createElement("p");
    billingboxdiv6P2.innerText = "0.00";
    billingboxdiv6.append(billingboxdiv6P1, billingboxdiv6P2);
    var billingboxdiv7 = document.createElement("div");
    var billingboxdiv7h4 = document.createElement("h4");
    billingboxdiv7h4.setAttribute("id", "checkoutboxx");
    billingboxdiv7h4.innerText = "CHECKOUT";
    billingboxdiv7.append(billingboxdiv7h4);
    var billingboxdiv8 = document.createElement("div");
    var billingboxdiv8P1 = document.createElement("p");
    billingboxdiv8P1.innerText = "No Delivery charges for Express Store Pickup.";
    var billingboxdiv8P2 = document.createElement("p");
    billingboxdiv8P2.innerText="you have a gift card or and electronic gift voucher? Use it at the payment page."
    billingboxdiv8.append(billingboxdiv8P1,billingboxdiv8P2);
    billingboxdiv.append(
      billingboxdiv1,
      billingboxdiv2,
      billingboxdiv3,
      billingboxdiv4,
      billingboxdiv5,
      billingboxdiv6,
      billingboxdiv7,
      billingboxdiv8
    );
    document.getElementById("middle2second").append(billingboxdiv);
  }
  var couponcode = document.getElementById("specialcoupondiscount");
  couponcode.addEventListener("click", getafter);
  
    function getafter(){
      var couponcode1 = document.getElementById("coupondiscountinput").value;
      console.log(couponcode1)
      if (couponcode1 == "DIWALI22") {
        var dicount=0;
        var finalsum = cartProducts.reduce(function (acc, ele, index) {
            return acc + ele.price1*(ele.qty || 1);
        }, 0);
        if (finalsum >= 3000 && finalsum <= 5000) {
            finalsum = finalsum - 200;
            dicount=200;
        }
        if (finalsum >= 5000 && finalsum <= 10000) {
            finalsum = finalsum - 400;
            dicount=400;
        }
        if (finalsum >= 10000) {
            finalsum = finalsum - 900;
            dicount=900;
        }
        //  localStorage.setItem('summ2','finalsum');
         localStorage.setItem('discount1',dicount)
        document.getElementById("middle2second").lastChild.remove();
        displayProductsprice(cartProducts,finalsum,dicount);
        // document.getElementById("alertmessage1").remove();
    }
    else if(couponcode1===""){
        var message=document.createElement("span");
        message.innerText="please Enter Coupon!!";
        message.setAttribute("id","alertmessage");
        document.getElementById("alertcoupon").append(message);
        // document.getElementById("alertmessage1").remove()
    }
    else {
        document.getElementById("alertmessage").remove();
        var messageo=document.createElement("span");
        messageo.innerText="Oops..Invalid Coupon!!";
        messageo.setAttribute("id","alertmessage1");
        document.getElementById("alertcoupon").append(messageo);
    }
    }

    function changeqty(elem,items){
      // localStorage.setItem("cartprotuct_s", JSON.stringify(items));

      var qtyprice=event.target.value;
      elem.qty=qtyprice;
      localStorage.setItem("cartprotuct_s", JSON.stringify(items));
      document.getElementById("middle2second").lastChild.remove();
      items.map(function(elem){
        document.getElementById("middle2first").lastChild.remove();
      });
      displayProducts(items,selected);
    }
    function  removecartItem(idx){
        cartProducts.map(function(ele,indx){
        document.getElementById("middle2first").lastChild.remove();
    })
    cartProducts.splice(idx,1);
    document.getElementById("middle2second").lastChild.remove();
    localStorage.setItem("cartprotuct_s", JSON.stringify(cartProducts));
    displayProducts(cartProducts,selected);
    }


    document.getElementById("checkoutboxx").addEventListener("dblclick", openCheckoutPage);
    function openCheckoutPage(){
      location.href="../pages/checkout.html";
    }

    // openCheckoutPage();

    // document.getElementById("nameUser").innerText=localStorage.setItem("user_n_ame").value;