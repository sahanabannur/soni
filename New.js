console.log("Hello World")
let input;
document.getElementById("btn1").onclick=function(){
    console.log("btn clicked")
    alert("btn clicked")
    input = document.getElementById("input").value
    console.log(input)
    document.getElementById("heading").innerHTML = "btn triggerd"
}