function loginmodal() {
  return `
    <div id="containemodal">
        <div id="crose"><i class="fa-regular fa-circle-xmark"></i></div>
        <div id="modal">
            <div id="first_child_modal">
                <div id="grandchild1">

                </div>
                <div id="grandchild">
                    <h1>Login/Signup</h1>
                    <P>for a tailored experience</P>
                </div>
            </div>

            <div id="somenewdiv">
                <label id="label1">Mobile Number<span id="textred">*</span></label>
                <input type="tel" id="mobileNumber" placeholder="" required="">
            </div>
            <div id="second_child_modal">
                <!-- <label id="labe">Mobile Number<span id="textred">*</span></label> -->
                <!-- <input type="number" class="form-control ob-mobile custom-validity-input" id="mobileNumber"
                    placeholder="" required=""> -->
                <!-- <label id="label1">Mobile Number<span id="textred">*</span></label> -->
                <button id="submit">Continue</button>
                <div id="option">
                    <span id="siguppp">Login using</span> <a id="change" href="#">Email</a>
                </div>

                <div id="lodinasadminn">
                    Login as admin
                </div>
                <div id="logos">
                    <img id="facebook_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" /><img
                        id="google_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png">
                </div>
            </div>
            <div id="third_child_modal">
                <p>By signing up you agree to our<a href="#"> Terms of Service </a>& <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </div>




    <div id="containemodal2">
        <div id="crose2"><i class="fa-regular fa-circle-xmark"></i></div>
        <div id="modal">
            <div id="first_child_modal">
                <div id="grandchild1">
                    <p><i class="fa-solid fa-arrow-left-long" id="back1"></i></p>
                </div>
                <div id="grandchild">
                    <h1>Password</h1>
                    <P>for a tailored experience</P>
                </div>
            </div>

            <div id="somenewdiv">
                <label id="label1">Password<span id="textred">*</span></label>
                <input type="password" class="hideclose" id="password" placeholder="" required="">
                <i id="eye" class="fa-solid fa-eye"></i>
            </div>
            <div id="second_child_modal">
                <!-- <input type="password" class="form-control ob-mobile custom-validity-input" id="password" placeholder=""
                    required="">
                <i id="eye" class="fa-solid fa-eye"></i>
                <label id="label2">Password<span id="textred">*</span></label> -->
                <button id="submit2">Submit</button>
                <div id="option1">
                    <p style="text-align:right">Forgot password?</p>

                </div>
                <div id="logos">
                    <img id="facebook_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" /><img
                        id="google_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png">
                </div>
            </div>
            <div id="third_child_modal">
                <p>By signing up you agree to our<a href="#"> Terms of Service </a>& <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </div>






    <div id="containemodal3">
        <div id="crose3"><i class="fa-regular fa-circle-xmark"></i></div>
        <div id="modal">
            <div id="first_child_modal">
                <div id="grandchild1">
                    <p><i id="back2" class="fa-solid fa-arrow-left-long"></i></p>
                </div>
                <div id="grandchild">
                    <h1>Verify OTP</h1>
                    <P>Enter the 4-digit otp.</P>
                </div>
            </div>
            <div id="second_child_modal">


                <div id="otp">
                    <input id="input1" type="text" maxlength="1" onkeyup="move(event, '','input1','input2')">
                    <input id="input2" type="text" maxlength="1" onkeyup="move(event, 'input1','input2','input3')">
                    <input id="input3" type="text" maxlength="1" onkeyup="move(event, 'input2','input3','input4')">
                    <input id="input4" type="text" maxlength="1" onkeyup="move(event, 'input3','input4','')">
                </div>
                <button id="submit3">Enter OTP</button>
                <div id="option">
                    <a href="#">Resend Otp</a>
                    <!-- <span>Login using</span> <a id="change" href="#">Email</a> -->
                </div>
                <div id="logos">
                    <img id="facebook_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" /><img
                        id="google_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png">
                </div>
            </div>
            <div id="third_child_modal">
                <p>By signing up you agree to our<a href="#"> Terms of Service </a>& <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </div>



    <div id="containemodal4">
        <div id="crose4"><i class="fa-regular fa-circle-xmark"></i></div>
        <div id="modal">
            <div id="first_child_modal">
                <div id="grandchild1">
                    <p><i id="back3" class="fa-solid fa-arrow-left-long"></i></p>
                </div>
                <div id="grandchild">
                    <h1>Welcome to Shoppers Stop</h1>
                    <P>let's get you registerd!</P>
                </div>
            </div>
            <div id="second_child_modal">
                <div id="div_1" class="div_1">
                    <label>Name<span id="textred">*</span></label>
                    <input type="text" class="div_1_input" id="div_1_input">
                </div>
                <div id="div_1">
                    <label>Mobile<span id="textred">*</span></label>
                    <input type="tel" maxlength="10" class="div_1_input" id="div_2_input">
                </div>
                <div id="div_1">
                    <label>Email<span id="textred">*</span></label>
                    <input type="email" class="div_1_input" id="div_3_input">
                </div>
                <div id="div_1">
                    <label>Password<span id="textred">*</span></label>
                    <input type="password" class="div_1_input" id="div_4_input">
                </div>


                <button id="submit4">Submit</button>

                <div id="logos">
                    <img id="facebook_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" /><img
                        id="google_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png">
                </div>
            </div>
            <!-- <div id="third_child_modal">
                <p>By signing up you agree to our<a href="#"> Terms of Service </a>& <a href="#">Privacy Policy</a></p>
            </div> -->
        </div>
    </div>




    <div id="containemodal5">
        <div id="crose5"><i class="fa-regular fa-circle-xmark"></i></div>
        <div id="modal">
            <div id="first_child_modal">
                <div id="grandchild1">
                    <p><i id="backlast" class="fa-solid fa-arrow-left-long"></i></p>
                </div>
                <div id="grandchild">
                    <h1>ADMIN LOGIN</h1>
                    <!-- <P>let's get you registerd!</P> -->
                </div>
            </div>
            <div id="second_child_modal">
                <div id="div_1" class="div_1">

                </div>

                <div id="div_1" class="diadmin">
                    <label>Email<span id="textred">*</span></label>
                    <input type="email" class="div_1_input" id="adminemail">
                </div>
                <div id="div_1" class="diadmin">
                    <label>Password<span id="textred">*</span></label>
                    <input type="password" class="div_1_input" id="idminpass">
                </div>


                <button id="submit5">Submit</button>

                <div id="logos">
                    <img id="facebook_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" /><img
                        id="google_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png">
                </div>
            </div>
            <!-- <div id="third_child_modal">
                <p>By signing up you agree to our<a href="#"> Terms of Service </a>& <a href="#">Privacy Policy</a></p>
            </div> -->
        </div>
    </div>



    <div id="alertts">Sucessfully Login</div>






`;
}

export { loginmodal };
