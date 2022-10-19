


 
var expanded1 = false;

//console.log(1);
//document.querySelector(".loading").style.display="block";


checkboxes1.style.display = "block";

function showCheck() {

  var checkboxes1 = document.getElementById("checkboxes1");
  if (!expanded1) {
    checkboxes1.style.display = "block";
    expanded1 = true;
  }
   else {
    checkboxes1.style.display = "none";
    expanded1 = false;
  }

}

var expanded5 = false;
//document.querySelector(".loading").style.display="block";
checkboxes5.style.display = "block";
function showCheck() {
  var checkboxes5 = document.getElementById("checkboxes5");
  if (!expanded5) {
    checkboxes5.style.display = "block";
    expanded5 = true;
  } else {
    checkboxes5.style.display = "none";
    expanded5 = false;
  }

}
var expanded2 = false;

checkboxes2.style.display = "block";
function showCheckboxes() {
  var checkboxes2 = document.getElementById("checkboxes2");
  if (!expanded2) {
    checkboxes2.style.display = "block";
    expanded2 = true;
  } else {
    checkboxes2.style.display = "none";
    expanded2 = false;
  }

}
var expanded3 = false;

checkboxes3.style.display = "block";
function showCheckboxes3() {
  var checkboxes3 = document.getElementById("checkboxes3");
  if (!expanded3) {
    checkboxes3.style.display = "block";
    expanded3 = true;
  } else {
    checkboxes3.style.display = "none";
    expanded3 = false;
  }

}
var expanded4 = false;

checkboxes4.style.display = "block";
function showCheckboxes4() {
  var checkboxes4 = document.getElementById("checkboxes3");
  if (!expanded4) {
    checkboxes4.style.display = "block";
    expanded4 = true;
  } else {
    checkboxes4.style.display = "none";
    expanded4 = false;
  }

}

// let key=document.getElementById("searchfunction").value;
// console.log(key);

let search=JSON.parse(localStorage.getItem("Productsearched"));

if(search=="MENS" || search=="Mens" || search=="mens")
{
  let url=`https://superstop.herokuapp.com/mens`;
  get(url);
  document.getElementById("category_text").innerText=search;
}
else if(search=="WATCHES")
{
  let url=`https://superstop.herokuapp.com/product/?q=${"watch"}`;
  document.getElementById("category_text").innerText=search;
   
   get(url);
}
else if(search=="KIDS")
{
  let url=`https://superstop.herokuapp.com/product/?q=${"boys"}`;
  document.getElementById("category_text").innerText=search;
   
   get(url);
}
else if(search!==null)
 {

    let url=`https://superstop.herokuapp.com/product/?q=${search}`;
   document.getElementById("category_text").innerText=search;
    
    get(url);
     
 }
 else{
    let url=`https://superstop.herokuapp.com/product`;
  document.getElementById("category_text").innerText=search;
     
    get(url);
 }

//var arr=["https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H","https://sslimages.shoppersstop.com/sys-master/images/h70/h21/27962780778526/A22SFCSLHU08323_BLACK.jpg_230Wx334H"];
let whole_arr=[];
async function get(url) {

  let res = await fetch(url);
  let data = await res.json();
data.map((ele)=>
{
  whole_arr.push(ele);
  
})
 

  localStorage.setItem("show_data",JSON.stringify(whole_arr));
  document.querySelector(".loading").style.display = "none";
  let ans=JSON.parse(localStorage.getItem("show_data"));

  appendData(ans);
  ans.sort((a,b)=>
  {
    return a.rating-b.rating;
  })
  appendData(ans);
}
 


 

 
 

function appendData(data) {
  document.querySelector(".loading").style.display = "none";
  document.getElementById("show_product").innerHTML="";
  let div = document.createElement("div");
  div.setAttribute("class", "loading");
  data.map((ele) => {

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
   
    card.append(img_div,title,desc,price_parent);

    card.addEventListener("click",function()
    {
      let arr=[];
      arr.push(ele);
      localStorage.setItem("target_product",JSON.stringify(arr[0]));

      let flag=JSON.parse(localStorage.getItem("flag_g"));
      console.log(flag);
       
      if(flag==true)
      {
       location.href="../productdescription/page.html";
      }
      else if(flag==false){
        let s = document.getElementById("alertts");
        s.innerText = "Please Login First";
        s.style.display = "flex";
        s.style.backgroundColor = "red";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
        }, 1200);
      }
      else{
        let s = document.getElementById("alertts");
        s.innerText = "Please Login First";
        s.style.display = "flex";
        s.style.backgroundColor = "red";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
        }, 1200);
      }
    })

    document.getElementById("show_product").prepend(card);

  })


}
let new_arr=[];
function checkFun() {
  
  if (event.target.checked) {
    let ans = event.target.value;
   whole_arr=[];
    new_arr.push(ans);
    
    document.querySelector(".loading").style.display = "block";
    new_arr.map((el)=>
    {
      let x=`https://superstop.herokuapp.com/product/?q=${el}`;
       setTimeout(() => {
      get(x);
    }, 100);
    })
 

  }
   
  else {
    
    let uncheck=event.target.value;
   let index=-1;
    for(let i=0; i<new_arr.length; i++)
    {
      if(new_arr[i]==uncheck)
      {
        index=i;
        break;
      }
    }
    new_arr.splice(index,1);
    
     
    if(new_arr.length==0)
    {
    let x = `https://superstop.herokuapp.com/product`;
    document.querySelector(".loading").style.display = "block";
    
    setTimeout(() => {
      get(x);
    }, 100);
  }
  else{
    whole_arr=[];
    new_arr.map((el)=>
    {
      let x=`https://superstop.herokuapp.com/product/?q=${el}`;
       setTimeout(() => {
      get(x);
    }, 100);
    })
  }

  }

};
   function Sorting()
   {
    document.querySelector(".loading").style.display = "block";
       let ans=JSON.parse(localStorage.getItem("show_data"));
        
       let value=document.getElementById("sort_by").value;
        
       ans.sort((a,b)=>
       {
        if(value=="discount")
        {
          return a.discount-b.discount;
        }
        else if(value=="rating")
        {
          return a.rating-b.rating;
        }
        else if(value=="high")
        {
          return a.price1-b.price1;
        }
        else if(value=="low")
        {
          return b.price1-a.price1;
        }
       });
       
       setTimeout(()=>
       {
        appendData(ans);
       },200);
        

      }
  
   

