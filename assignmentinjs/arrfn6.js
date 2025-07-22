const arr=["hi","hello","bye"]
function longestString(arr)
{
    let i 
    let longest=""
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].length > longest.length)
        {
            longest=arr[i]
        }
    }
    return longest
}
console.log(longestString(arr))