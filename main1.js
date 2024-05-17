console.log("js is connected")
let num2=0;
document.getElementById("btn4").onclick=function(){
    console.log("btn is clicked")
    num2=num2+1;
    console.log(num2)
    document.getElementById("num1").innerHTML=num2
}
document.getElementById("btn5").onclick=function(){
    console.log("btn is clicked")
    num2=0;
    console.log(num2)
    document.getElementById("num2").innerHTML=num2
}
document.getElementById("btn5").onclick=function(){
    console.log("btn is clicked")
    num2=num2-1;
    if(num2<1){
        console.log ("you chose -ve value")
        num2=0;
    }
    console.log(num2)
    document.getElementById("num2").innerHTML=num2
}