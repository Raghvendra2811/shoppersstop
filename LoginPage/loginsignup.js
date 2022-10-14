let flag = true;
var c = 1;
document.getElementById("change").addEventListener("click", () => {
  // let div = document.getElementById("change");
  if (flag) {
    console.log("hello1");
    document.getElementById(
      "label1"
    ).innerHTML = `Mobile Number<span id="textred">*</span>`;
    document.getElementById("change").innerText = "Email";
    document.getElementById("mobileNumber").setAttribute("type", "number");

    flag = false;

    c = 1;
  } else if (flag == false) {
    document.getElementById(
      "label1"
    ).innerHTML = `Email<span id="textred">*</span>`;
    document.getElementById("change").innerText = "Number";
    document.getElementById("mobileNumber").setAttribute("type", "email");

    flag = true;
    c = 0;
  }
});
console.log(c);

var arr = JSON.parse(localStorage.getItem("userlist")) || [];
document.getElementById("submit").addEventListener("click", () => {
  console.log("hz");
  if (c == 1) {
    let val = document.getElementById("mobileNumber").value;
    localStorage.setItem("contact", val);
    document.getElementById("containemodal").style.display = "none";
    document.getElementById("containemodal3").style.display = "flex";
  } else if (c == 0) {
    let val = document.getElementById("mobileNumber").value;
    arr.map((el) => {
      if (el.email == val) {
        document.getElementById("containemodal2").style.display = "flex";
        document.getElementById("containemodal").style.display = "none";
      } else {
        alert("Please enter correct email");
      }
    });
    // localStorage.setItem("email", val);
  }
});

document.getElementById("submit2").addEventListener("click", () => {
  let val = document.getElementById("password").value;
  arr.map((ele) => {
    if (ele.password == val) {
      alert("Login sucess!");
      document.getElementById("containemodal2").style.display = "none";
    } else {
      alert("Please enter correct password");
    }
  });
});

document.getElementById("crose").addEventListener("click", () => {
  document.getElementById("containemodal").style.display = "none";
  document.getElementById("containemodal2").style.display = "none";
});

document.getElementById("crose2").addEventListener("click", () => {
  document.getElementById("containemodal2").style.display = "none";
});

document.getElementById("openmodal").addEventListener("click", () => {
  document.getElementById("containemodal").style.display = "flex";
});

//input otp
document.getElementById("submit3").addEventListener("click", () => {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;
  let input4 = document.getElementById("input4").value;

  if (input1 == 1 && input2 == 2 && input3 == 3 && input4 == 4) {
    document.getElementById("containemodal3").style.display = "none";
    document.getElementById("containemodal4").style.display = "flex";
  } else {
    alert("Enter Valid Otp");
  }
});

document.getElementById("crose3").addEventListener("click", () => {
  document.getElementById("containemodal3").style.display = "none";
});

document.getElementById("crose4").addEventListener("click", () => {
  document.getElementById("containemodal4").style.display = "none";
});

var arr = JSON.parse(localStorage.getItem("userlist")) || [];
document.getElementById("submit4").addEventListener("click", () => {
  let input1 = document.getElementById("div_1_input").value;
  let input2 = document.getElementById("div_2_input").value;
  let input3 = document.getElementById("div_3_input").value;
  let input4 = document.getElementById("div_4_input").value;

  if (input1 == "" || input2 == "" || input3 == "" || input4 == "") {
    alert("Enter all details");
  } else {
    let obj = {
      name: input1,
      mobile: input2,
      email: input3,
      password: input4,
    };

    arr.push(obj);
    localStorage.setItem("userlist", JSON.stringify(arr));
    document.getElementById("containemodal4").style.display = "none";
    document.getElementById("containemodal").style.display = "flex";
  }
});

function move(e, p, c, n) {
  var length = document.getElementById(c).value.length;
  var max = document.getElementById(c).getAttribute("maxLength");
  if (length == max) {
    if (n !== "") {
      document.getElementById(n).focus();
    }
  }
  // console.log(e);
  if (e.key === "Backspace") {
    if (p !== "") {
      document.getElementById(p).focus();
    }
  }
}
