var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [
    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "green",
        size : "Medium",
        price : 1299,
        qty : 1
    },

    {
        image_url : "https://sslimages.shoppersstop.com/sys-master/images/hc8/hb6/28383648317470/AW22KSSE56F_GREEN.jpg_230Wx334H",
        brand : "Kashish",
        namee : "Sanya Malhotra Embroidered Round Neck Viscose Blend Womens Kurta Sharara Dupatta Set",
        color : "pink",
        size : "Small",
        price : 1299,
        qty : 1
    }
];

display(cartProducts);

function display(products) {

    console.log("hey:","shivani");
    if(products.length>=1){
        // document.getElementById("products").style.display="block";
        // document.getElementById("coupons").style.display="grid";
        // document.getElementById("billHead").style.display="block";
        document.getElementById("emptyCart").style.display="none";
        document.querySelector("#itemCnt span").innerText=products.length;
          displayProducts(products);
    }
    else{

         document.getElementById("middle").style.display="none";
        // document.getElementById("coupons").style.display="none";
        // document.getElementById("billHead").style.display="none";
        // document.getElementById("cartFooter").style.display="none";
        document.getElementById("emptyCart").style.display="block";
    }
}

function displayProducts(items){

    console.log("hey:","shiva");

    //  document.querySelector("#cartitems").innerText = "";

    items.map((el, idx) => {

        let productDiv = document.createElement("div");

        let imgDiv = document.createElement("div");
        let proImage = document.createElement("img");
        proImage.setAttribute("src", el.image_url);
        imgDiv.append(proImage);


        let detailsDiv = document.createElement("div");
        let proBrand = document.createElement("p");
        proBrand.setAttribute("id", "brand");
        proBrand.innerText = el.brand;
        let proDesc = document.createElement("p");
        proDesc.setAttribute("id", "branddescrip");
        proDesc.innerText = el.namee;
        detailsDiv.append(proBrand, proDesc);

        let proColor = document.createElement("p");

        let proQty = document.createElement("div");
        proQty.innerHTML =
        '<p>Quantity</p><span id="qtySpan"></span> : <select id="mySelect"> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> </select>';
        // proQty.childNodes[3].value = elem.qty;
        // proQty.childNodes[3].addEventListener("change", function () {
        //     changeQty(elem);
        // });


        let proSize= document.createElement("div");

        let proPrice = document.createElement("p");

        // let productDiv = document.createElement("div");
        productDiv.append(imgDiv, detailsDiv, proQty);
        document.querySelector(".cartitems").append(productDiv);

    });
}