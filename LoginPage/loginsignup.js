setTimeout(() => {
  let flag = true;
  var c = 1;
  document.getElementById("change").addEventListener("click", () => {
    document.getElementById("change").innerText = "";
    if (flag) {
      console.log("hello1");
      document.getElementById(
        "label1"
      ).innerHTML = `Mobile Number<span id="textred">*</span>`;
      document.getElementById("siguppp").innerText = "Login Using";
      document.getElementById("change").innerText = "Email";
      document.getElementById("mobileNumber").setAttribute("type", "tel");
      // document.getElementById("mobileNumber").setAttribute("maxlength", "15");

      flag = false;

      c = 1;
    } else if (flag == false) {
      document.getElementById(
        "label1"
      ).innerHTML = `Email<span id="textred">*</span>`;
      document.getElementById("siguppp").innerText = "Signup Using";
      document.getElementById("change").innerText = "Number";
      document.getElementById("mobileNumber").setAttribute("type", "email");

      flag = true;
      c = 0;
    }
  });
  console.log(c);

  document.getElementById("submit").addEventListener("click", () => {
    // document.getElementById("mobileNumber").value = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";

    console.log("hz");
    if (c == 1) {
      let val = document.getElementById("mobileNumber").value;
      if (val == "") {
        let s = document.getElementById("alertts");
        s.innerText = "Please fill detail";
        s.style.display = "flex";
        s.style.backgroundColor = "red";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
        }, 1200);

        // alert("Please fill detail");
        return;
      } else {
        localStorage.setItem("contact", val);
        document.getElementById("div_2_input").value =
          localStorage.getItem("contact");
        document.getElementById("containemodal").style.display = "none";
        document.getElementById("containemodal3").style.display = "flex";
      }
    } else if (c == 0) {
      var arr = JSON.parse(localStorage.getItem("userlist")) || [];
      var val = document.getElementById("mobileNumber").value;
      // console.log(val);

      let bool = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].email == val) {
          localStorage.setItem("user_n_ame", arr[i].name);
          localStorage.setItem("user_e-mail", arr[i].email);

          document.getElementById("containemodal2").style.display = "flex";
          document.getElementById("containemodal").style.display = "none";
          document.getElementById("password").value = "";
          document.getElementById("mobileNumber").value = "";
          bool = true;

          break;
        }
      }
      if (!bool) {
        let s = document.getElementById("alertts");
        s.innerText = "Invalid Email";
        s.style.display = "flex";
        s.style.backgroundColor = "red";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
        }, 1200);

        // alert("Please enter correct email");
      }
    }
  });

  let flag1 = localStorage.getItem("flag_g") || false;
  document.getElementById("usernamedisplay").innerText =
    localStorage.getItem("user_n_ame");

  document.getElementById("submit2").addEventListener("click", () => {
    var arr = JSON.parse(localStorage.getItem("userlist")) || [];
    let val = document.getElementById("password").value;
    let bool = false;
    arr.map((ele) => {
      if (ele.password == val) {
        flag1 = true;
        localStorage.setItem("flag_g", flag1);

        let nameee = localStorage.getItem("user_n_ame");
        document.getElementById("usernamedisplay").innerText = nameee;

        document.getElementById("navbarpart4").style.display = "flex";
        document.getElementById("openmodal").style.display = "none";
        let s = document.getElementById("alertts");
        s.innerText = "Login sucessfull";
        s.style.display = "flex";
        s.style.backgroundColor = "green";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
        }, 1200);

        document.getElementById("containemodal2").style.display = "none";
        bool = true;
        return;
      }
    });
    if (!bool) {
      let s = document.getElementById("alertts");
      s.innerText = "Invalid Credentials";
      s.style.display = "flex";
      s.style.backgroundColor = "red";

      setTimeout(() => {
        document.getElementById("alertts").style.display = "none";
      }, 1200);
      // alert("Please enter correct password");
    }
  });

  document.getElementById("crose").addEventListener("click", () => {
    document.getElementById("containemodal").style.display = "none";
    document.getElementById("containemodal2").style.display = "none";
  });

  document.getElementById("crose2").addEventListener("click", () => {
    document.getElementById("containemodal2").style.display = "none";
  });

  document.getElementById("openmodal").addEventListener("click", () => {
    document.getElementById("mobileNumber").value = "";

    document.getElementById("containemodal").style.display = "flex";
  });

  //input otp
  document.getElementById("submit3").addEventListener("click", () => {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;

    if (input1 == "" || input2 == "" || input3 == "" || input4 == "") {
      let s = document.getElementById("alertts");
      s.innerText = "Enter all Details";
      s.style.display = "flex";
      s.style.backgroundColor = "red";

      setTimeout(() => {
        document.getElementById("alertts").style.display = "none";
      }, 1200);
      // alert("please fill all detail");
      return;
    } else {
      if (input1 == 1 && input2 == 2 && input3 == 3 && input4 == 4) {
        document.getElementById("containemodal3").style.display = "none";
        document.getElementById("containemodal4").style.display = "flex";
        document.getElementById("div_1_input").value = "";
        // document.getElementById("div_2_input").value = "";
        document.getElementById("div_3_input").value = "";
        document.getElementById("div_4_input").value = "";
      } else {
        let s = document.getElementById("alertts");
        s.innerText = "Enter Valid OTP";
        s.style.display = "flex";
        s.style.backgroundColor = "red";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
        }, 1200);

        // alert("Enter Valid Otp");
      }
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
      let s = document.getElementById("alertts");
      s.innerText = "Enter all Details";
      s.style.display = "flex";
      s.style.backgroundColor = "red";

      setTimeout(() => {
        document.getElementById("alertts").style.display = "none";
      }, 1200);

      // alert("Enter all details");
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
      document.getElementById("mobileNumber").value = "";

      let s = document.getElementById("alertts");
      s.innerText = "Registered Sucessfully";
      s.style.display = "flex";
      s.style.backgroundColor = "green";

      setTimeout(() => {
        document.getElementById("alertts").style.display = "none";
      }, 1200);
    }
  });

  document.getElementById("back1").addEventListener("click", () => {
    document.getElementById("containemodal").style.display = "flex";
    document.getElementById("containemodal2").style.display = "none";
  });
  document.getElementById("back2").addEventListener("click", () => {
    document.getElementById("containemodal").style.display = "flex";
    document.getElementById("containemodal3").style.display = "none";
    document.getElementById("mobileNumber").value = "";
  });
  document.getElementById("back3").addEventListener("click", () => {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("containemodal3").style.display = "flex";
    document.getElementById("containemodal4").style.display = "none";
  });

  let b = true;
  document.querySelector("#eye").addEventListener("click", () => {
    if (b) {
      document.querySelector(".hideclose").setAttribute("type", "text");
      b = false;
    } else {
      b = true;
      document.querySelector(".hideclose").setAttribute("type", "password");
    }
  });

  document.getElementById("submit5").addEventListener("click", () => {
    let email = document.getElementById("adminemail").value;
    let pass = document.getElementById("idminpass").value;
    if (email == "admin@gmail.com") {
      if (pass == "admin123") {
        let s = document.getElementById("alertts");
        s.innerText = "login sucessfull";
        s.style.display = "flex";
        s.style.backgroundColor = "green";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
          location.href = "../admin/admin.html";
        }, 1200);

        // alert("login sucessfull");
      } else {
        let s = document.getElementById("alertts");
        s.innerText = "Invalid Credentials";
        s.style.display = "flex";
        s.style.backgroundColor = "red";

        setTimeout(() => {
          document.getElementById("alertts").style.display = "none";
        }, 1200);

        // alert("Invalid crediatial");
      }
    }
  });

  document.getElementById("lodinasadminn").addEventListener("click", () => {
    document.getElementById("containemodal").style.display = "none";
    document.getElementById("containemodal5").style.display = "flex";
  });

  document.getElementById("crose5").addEventListener("click", () => {
    document.getElementById("containemodal5").style.display = "none";
  });

  document.getElementById("backlast").addEventListener("click", () => {
    document.getElementById("containemodal5").style.display = "none";
    document.getElementById("containemodal").style.display = "flex";
  });
}, 2000);
