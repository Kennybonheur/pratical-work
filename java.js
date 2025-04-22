let id =(id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    pass = id("pass"),
    form=id("form"),
    errorMsg= classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    
    main(username,0,"User name cannot blank");
    main(email,1,"Email name cannot blank");
    main(pass,2,"Password name cannot blank");
});
let main=(id,serial,message)=>{
    if (id.value.trim() ===""){
        errorMsg[serial].innerHTML=message;
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
    }
    else{
        errorMsg[serial].innerHTML="";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
}