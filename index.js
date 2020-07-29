function ValidateEmail()
{
var mail=document.getElementsByName("email");
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail[0].value))
  {
    return (true);
    
  }else{
    alert("You have entered an invalid email address!")
    return (false);
  }
}
