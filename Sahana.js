let input;
console.log("hello")
document.getElementById("btn1").onclick = function() {
    console.log("Button clicked");
    alert("Button clicked");
    UserName = document.getElementById("UName").value;
    console.log("UName: " + UserName);
    Password = document.getElementById("Password").value;
    console.log("Password: " + Password);
}
