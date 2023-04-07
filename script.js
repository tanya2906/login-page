let sf_name=document.querySelector(".sf-name");
let gen_otp=document.getElementById("gen-otp");
let email_add=document.getElementById("email-add");
let msg=document.getElementById("msg");
sf_name.addEventListener("click",()=>{
    window.location.href ="https://www.google.com/";
});
gen_otp.addEventListener("click",()=>{

    if(email_add.value=="")
    {
        /*console.log("Please enter valid email address");*/
        msg.innerText="Please enter valid email address";
        msg.style.opacity="1.0";
    }
    else if(email_add.value=="abc123@gmail.com"){
        //validation for sign-up email
        //example: abc123@gmail.com
        msg.style.opacity="0.0";
        alert("check email");
        //console.log("login");
    }
    else
    {
        //console.log("Account does not exists");
        msg.innerText="Account does not exists";
        msg.style.opacity="1.0";
    }
    
});
