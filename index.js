function ValidateEmail()
{
var mail=document.getElementsByName("email");
var inputborder=document.querySelector(".content");
var erroricon=document.querySelector(".erroricon");
var errormsg=document.querySelector(".errormsg");
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail[0].value))
  {

    inputborder.classList.toggle("error");
    erroricon.style.display="none";
    errormsg.style.display="none";
    return true;
  }else{
    // alert("You have entered an invalid email address!")

    inputborder.classList.toggle("error");
    erroricon.style.display="inline-block";
    errormsg.style.display="inline-block";

      return (false);

  }
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector(".hero").setAttribute("src", "images/hero-mobile.jpg");
  } else {
   document.querySelector(".hero").setAttribute("src", "images/hero-desktop.jpg");
  }
}

var x = window.matchMedia("(max-width: 1200px)")
myFunction(x);
x.addListener(myFunction);
