
function checkCreds()
{
    var UserName = document.getElementById("UserName").value;
    var Password = document.getElementById("Password").value;
    var Guest = document.getElementById("numGuest").value;
    
    var UserInfo = UserName + Password;
    alert(UserInfo.length);

    if (UserInfo.length <10)
    {
        document.getElementById("UserStatus").innerHTML = " User information is invalid";
    }
    else if (Guest <=20 && Guest >2)
    {
        alert("You Win!");
        //location.replace("tables.html");//
    }
    else
    {
        document.getElementById("UserStatus").innerHTML = " # of Guest is invalid";  
    }
}