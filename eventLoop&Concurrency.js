function a(){
    b();
    console.log("a");
}
function b(){
    c();
    console.log("b");
}

setTimeout(()=>{
    console.log("ok");
},3000)
setTimeout(()=>{
console.log("YES");
},3000);
function c(){
    d();
    console.log("c");
}
function d(){
    e();
    console.log("d");
}
function e(){
    f();
    console.log("e");
}
function f(){
    console.log("f");
}
a();