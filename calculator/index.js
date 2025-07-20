function add(a,b){
    return Number(a)+Number(b)
}
function sub(a,b){
    return Number(a)-Number(b)
}
function mul(a,b){
    return Number(a)*Number(b)
}
function div(a,b){
    return Number(a)/Number(b)
}
function calculate(event)
{
    console.log(event)
    event.preventDefault()
    console.log("Calculate")


const firstNumber = document.getElementById('firstNumber').value
const secondNumber = document.getElementById('secondNumber').value
const operation =document.getElementById("operation").value
const resultDiv=document.getElementById("result")

let result=null
if(operation==="add"){
    result=add(firstNumber,secondNumber)
}
else if(operation==="sub")
{
    result=sub(firstNumber,secondNumber)
}
else if(operation==="mul")
{
    result=mul(firstNumber,secondNumber)
}
else{
    result=div(firstNumber,secondNumber)
}
resultDiv.innerHTML = result
// alert(result)


console.log(firstNumber)
console.log(secondNumber)
console.log(operation)

}