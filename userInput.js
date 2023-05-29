//Terry Shade, Assignment 3.2 User Input Validation//
function checkCreds()
{
    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;
    var Zipcode = document.getElementById("zipnum").value;
    //Varibles for the function "checkCreds" above//
    
    var UserInfo = UserName + Password;
    //Concatenation of two 'vars UserName and Password into one "var userinfo".//
    confirm(UserInfo.length);

    if (UserInfo.length <20)
     //the "if" codition above,controlls the varible length for the userinput.// 
     //The combined UserName + Password, can be 20 or less characters, or you'll get " User information is invalid".//
    {
        document.getElementById("UserStatus").innerHTML = " User information is invalid";
        //this is where the update will be changed on the html page from "Summer Event Registration!" to " User information is invalid".//
    }
    else if (Zipcode ==5)
    //the "else if" , is where i'm controlling the varible length for the zipcode which is 5.//
    {
        alert("valid Info! YOU WIN!");
        //location.replace("tables.html");//
    }
    else (Zipcode !==5)
    {
        confirm("invalid Zipcode");
        document.getElementById("UserStatus").innerHTML = " Zipcode is invalid";
        //  when the two top conditions aren't then, javascript will jump to the "else" statement.//
    }
}