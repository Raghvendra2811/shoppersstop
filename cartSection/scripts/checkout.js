var cartProducts = JSON.parse(localStorage.getItem("cartprotuct_s")) || [];

document.getElementById("payDropDown").style.display="none";
document.getElementById("payOption").addEventListener("click", function(){
    document.getElementById("payDropDown").style.display="grid";
});

document.querySelector("#closePay img").addEventListener("click", function(){
    document.getElementById("payDropDown").style.display="none";
})

 display(cartProducts);
//  displayProductsprice(cartProducts); 

function display(item){
    item.map((el, idx) => {
        
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "imgDiv");
        let img = document.createElement("img");
        img.setAttribute("src", el.img);
        imgDiv.append(img);

        let brand = document.createElement("p");
        brand.innerText = el.brand;
        

        let price = document.createElement("p");
        price.innerText = "₹ " + el.price1;

        let qnt = document.createElement("span");
        qnt.innerText = "Quantity: " + ((el.qty-0) || 1);

        let imgDetails = document.createElement("div");
        imgDetails.setAttribute("id", "imgDetails");
        imgDetails.append(brand, price, qnt);

        let items = document.createElement("div");
        items.setAttribute("id", "items");
        items.append(imgDiv, imgDetails);
         document.querySelector("#payProd").append(items);
    })

    document.querySelector("#product span").innerText=item.length;
}



document.getElementById("addressBtn").addEventListener("click", function(){
    event.preventDefault();
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let pinCode = document.getElementById("pin").value;

    document.getElementById("updateAdd").innerText=""
    document.getElementById("updateAdd").innerText = city+" "+state+" "+'('+pinCode+')'
    console.log("sss",city+" "+state+" "+'('+pinCode+')');

});

document.getElementById("proceedBtn").addEventListener("click", function(){
    // location.href="../pages/thankyou.html";
    document.getElementById("confirm").style.display="flex";
    document.getElementById("confirm").addEventListener("click", function(){
         location.href="../pages/thankyou.html";
         localStorage.setItem('cartprotuct_s',JSON.stringify([]));
    })
})

document.getElementById("confirm").style.display="none";

// let summ=localStorage.getItem("");
let proff=localStorage.getItem("discount1");
// let summ=0;
// for(var i=0; i<)


displayProductsprice(cartProducts, proff);
function displayProductsprice(items,profit){

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
    billingboxdiv5h4.innerText = "₹"+(totalsum-profit);
    billingboxdiv5.append(billingboxdiv5h3, billingboxdiv5h4);
    var billingboxdiv6 = document.createElement("div");
    var billingboxdiv6P1 = document.createElement("p");
    billingboxdiv6P1.innerText = "Total Saving";
    var billingboxdiv6P2 = document.createElement("p");
    billingboxdiv6P2.innerText = "₹"+profit;
    billingboxdiv6.append(billingboxdiv6P1, billingboxdiv6P2);
    var billingboxdiv7 = document.createElement("div");

    // billingboxdiv7.setAttribute("id", "checkBtnn");

    // document.getElementById("checkBtnn").addEventListener("click", function(){
    //   openCheckoutPage();
    // });
    var billingboxdiv7h4 = document.createElement("h4");
    billingboxdiv7h4.setAttribute("id", "checkoutboxx");
    // billingboxdiv7h4.innerText = "CHECKOUT";
    // billingboxdiv7.append(billingboxdiv7h4);
    var billingboxdiv8 = document.createElement("div");
    var billingboxdiv8P1 = document.createElement("p");
    // billingboxdiv8P1.innerText = "No Delivery charges for Express Store Pickup.";
    var billingboxdiv8P2 = document.createElement("p");
    // billingboxdiv8P2.innerText="you have a gift card or and electronic gift voucher? Use it at the payment page."
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
    document.getElementById("vertical").append(billingboxdiv);
  }

document.getElementById("signId").innerText=localStorage.getItem("user_e-mail");
document.getElementById("logedinUser").innerText=localStorage.getItem("user_n_ame");



