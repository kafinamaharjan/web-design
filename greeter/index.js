function buttonGreet()
{
    const inputValue=a.value;
    return greet(inputValue);
};
function greet(name)
{
    return `Jojolapa ${name}`;
};
function reset()
{
    a.value="";
    result.innerText="";
};


const a=document.getElementById("input");
const submitButton = document.getElementById("button");
const resetbutton=document.getElementById("reset");
const result=document.getElementById("result");

submitButton.addEventListener("click",function(){
    console.log("button");
    const value=buttonGreet();
    result.innerText=value;
});
resetbutton.addEventListener("click",function(){
    console.log("reset");
    reset();
});