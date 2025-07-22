const words=["Kafina","Maharjan"]
function reverseString(arr)
{
    let i 
    let reversed=[]
    for(i=arr.length-1; i>=0;i--)
    {
        reversed+=arr[i]
    }
    return reversed
}
console.log([reverseString(words)])
