function increment(a)
{
    return a+1
}
function decrement(a)
{
   return a-1
}
function reset()
{
    return 0
}
const incrementbutton=document.getElementById("increment")
const decrementbutton=document.getElementById("decrement")
const resetbutton=document.getElementById("reset")
const result=document.getElementById("result")

incrementbutton.addEventListener("click",function(){
    console.log("increment")
    let count = Number(result.innerText)
    const value=increment(count)
    console.log(value)
    result.innerText=value
})
decrementbutton.addEventListener("click",function(){
    console.log("decrement")
     let count = Number(result.innerText)
    const value=decrement(count)
    console.log(value)
    result.innerText=value
})
resetbutton.addEventListener("click",function(){
    console.log("reset")
    result.innerText=0
})