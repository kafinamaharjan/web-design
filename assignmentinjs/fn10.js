function reverseString(str)
{
    let i 
    let reversed=""
    for(i=str.length-1; i>=0;i--)
    {
        reversed+=str[i]
    }
    return reversed
}
result=reverseString("HI DEAR!")
console.log("Reversed String:",result)