var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [
    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "green",
        // size : "Medium",
        price : 1299,
        qty : 1
    },

    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "pink",
        // size : "Small",
        price : 1299,
        qty : 1
    },
    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "pink",
        // size : "Small",
        price : 1299,
        qty : 1
    },
    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "pink",
        // size : "Small",
        price : 1299,
        qty : 1
    },
    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "pink",
        // size : "Small",
        price : 1299,
        qty : 1
    },
    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "pink",
        // size : "Small",
        price : 1299,
        qty : 1
    },
    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "pink",
        // size : "Small",
        price : 1299,
        qty : 1
    }
];

document.getElementById("payDropDown").style.display="none";
document.getElementById("payOption").addEventListener("click", function(){
    document.getElementById("payDropDown").style.display="grid";
});

document.querySelector("#closePay img").addEventListener("click", function(){
    document.getElementById("payDropDown").style.display="none";
})

 display(cartProducts);

function display(item){
    item.map((el, idx) => {
        
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "imgDiv");
        let img = document.createElement("img");
        img.setAttribute("src", el.image_url);
        imgDiv.append(img);

        let brand = document.createElement("p");
        brand.innerText = el.brand;
        

        let price = document.createElement("p");
        price.innerText = "₹ " + el.price;

        let qnt = document.createElement("span");
        qnt.innerText = "Quantity: " + el.qty;

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

//displayProductsprice(cartProducts,finalsum,dicount);


function displayProductsprice(items,sum,profit){

    var totalsum = items.reduce(function (acc, ele, index) {
      return acc + ele.price*ele.qty;
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
    billingboxdiv5.append(billingboxdiv5h3, billingboxdiv5h4);
    var billingboxdiv6 = document.createElement("div");
    var billingboxdiv6P1 = document.createElement("p");
    billingboxdiv6P1.innerText = "Total Saving";
    var billingboxdiv6P2 = document.createElement("p");
    billingboxdiv6P2.innerText = "₹"+profit;
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
    document.getElementById("vertical").append(billingboxdiv);
  }





// document.getElementById("boot").style.display="none";

document.querySelector("#checkingDetails a").addEventListener("click", function(){
    document.getElementById("boot").style.display="block";
})

// document.getElementById("addressBtn").addEventListener("click", function(){
    function fun(){
    // event.preventDefault();
    let city = document.getElementById("city").innerText;
    let state = document.getElementById("state").innerText;
    let pinCode = document.getElementById("pin").innerText;

    document.querySelector("#horizontal :nth-child(2) p a").innerText=city+" "+state+" "+'('+pinCode+')';
    console.log("jjj:", document.querySelector("#horizontal :nth-child(2) p a").innerText);
    console.log("sss", "ssss")

    // document.getElementById("boot").style.display="none"
};

document.getElementById("btn").addEventListener("click", function(){
    // alert("heyy")
    document.getElementById("confirm").style.display="flex";
    document.getElementById("confirm").addEventListener("click", function(){
        //  document.getElementById("confirm").style.display="none";
         location.href="../pages/thankyou.html";
    })
})

document.getElementById("confirm").style.display="none";