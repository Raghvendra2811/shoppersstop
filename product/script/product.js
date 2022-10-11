var expanded1 = false;
 
checkboxes1.style.display = "block";
function showCheckboxes() {
  var checkboxes1 = document.getElementById("checkboxes1");
  if (!expanded1) {
    checkboxes1.style.display = "block";
    expanded1 = true;
  } else {
    checkboxes1.style.display = "none";
    expanded1 = false;
  }

}
var expanded2 = false;
 
checkboxes2.style.display = "block";
function showCheckboxes() {
  var checkboxes2 = document.getElementById("checkboxes1");
  if (!expanded2) {
    checkboxes2.style.display = "block";
    expanded2 = true;
  } else {
    checkboxes2.style.display = "none";
    expanded2 = false;
  }

}

 
   

//var arr=["https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H"];

async function get(url)
{
   
    let res=await fetch(url);
    let data=await res.json();
    appendData(data);
    document.querySelector(".loading").style.display="none";
}
let key="Mens Clothing";

let h4=document.createElement("h4");
h4.innerText=key;

let select=document.createElement("select");
let option=document.createElement("option");
option.innerText="SORT BY:POPULAR";
select.setAttribute("id","sort_by");
select.append(option);
document.getElementById("category_nav").append(h4,select);

let url="https://superstop.herokuapp.com/product";
 
get(url);


function appendData(data)
{
  document.getElementById("show_product").innerText="";
  let div=document.createElement("div");
  div.setAttribute("class","loading");
    data.map((ele)=>
    {
        
        let card=document.createElement("div");
        card.setAttribute("id","card");
        
        let img_div=document.createElement("div");
        img_div.setAttribute("id","parent_img");
        let img=document.createElement("img");
        img.src=ele.img;
        img.style.width="100%";
        
        img_div.append(img);

        let title=document.createElement("h4");
        title.innerText=ele.brand;
        
        let desc=document.createElement("p");
        desc.innerText=ele.name;

        let price=document.createElement("h4");
        price.innerText="₹ "+ele.price2;

        let rating=document.createElement("h4");
        rating.innerText=ele.rating;

        card.append(img_div,title,desc,price);

        document.getElementById("show_product").append(card);


    })
     

}

function checkFun()
{
    if(event.target.checked)
    {
        let ans=event.target.value;
        let x=`https://superstop.herokuapp.com/product/?q=${ans}`;
        document.querySelector(".loading").style.display="block";
        setTimeout(()=>
        {
          
          get(x);
        },1000);
         
    }
       
 
 
}       



