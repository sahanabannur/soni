console.log("js is connected")
let num1=0;
document.getElementById("btn1").onclick=function(){
    console.log("btn is clicked")
    num1=num1+1;
    console.log(num1)
    document.getElementById("num1").innerHTML=num1
}
document.getElementById("btn2").onclick=function(){
    console.log("btn is clicked")
    num1=0;
    console.log(num1)
    document.getElementById("num1").innerHTML=num1
}
document.getElementById("btn3").onclick=function(){
    console.log("btn is clicked")
    num1=num1-1;
    if(num1<1){
        console.log ("you chose -ve value")
        num1=0;
    }
    console.log(num1)
    document.getElementById("num1").innerHTML=num1
}
