document
  .getElementById("add-product-button")
  .addEventListener("click", async () => {
    let res = await fetch("https://superstop.herokuapp.com/product");
    let data = await res.json();
    let id;
    if(data.length==495){
      id=809;
    }
    id = id + 1;
    let getname = document.getElementById("title").value;
    let brand = document.getElementById("brand_name").value;
    let img = document.getElementById("image_link").value;
    let price1 = +document.getElementById("mrp1").value;
    let price2 = +document.getElementById("mrp2").value;

    if (
      getname == "" ||
      brand == "" ||
      img == "" ||
      price1 == "" ||
      price2 == ""
    ) {
      alert("All fields are Mandatory");
    } else {
      let discount = Math.floor(100 - (price2 * 100) / price1);
      let proname = getname.toLowerCase();
      let name = getname.toUpperCase();
      let rating = "4.2";
      let item = {
        id: id,
        img: img,
        name: name,
        brand: brand,
        proname: proname,
        price1: price1,
        price2: price2,
        discount: discount,
        rating: rating,
      };
      let update = await fetch(`https://superstop.herokuapp.com/product`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      document.getElementById("title").value = null;
      document.getElementById("brand_name").value = null;
      document.getElementById("image_link").value = null;
      document.getElementById("mrp1").value = null;
      document.getElementById("mrp2").value = null;
      alert("produt added successfuly");
    }
  });
