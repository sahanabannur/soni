console.log("js is connected")
let num3=0;
document.getElementById("btn7").onclick=function(){
    console.log("btn1 is clicked")
    num3=num3+1;
    console.log(num3)
    document.getElementById("num3").innerHTML=num3
}
document.getElementById("btn8").onclick=function(){
    console.log("btn2 is clicked")
    num3=num3-1;
    console.log(num3)
    document.getElementById("num3").innerHTML=num3
}
document.getElementById("btn9").onclick=function(){
    console.log("btn3 is clicked")
    num3=num3*1;
    console.log(num3)
    document.getElementById("num3").innerHTML=num3
}
document.getElementById("btn10").onclick=function(){
    console.log("btn4 is clicked")
    num3=num3/1;
    console.log(num3)
    document.getElementById("num3").innerHTML=num3
}