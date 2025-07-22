function findMax(a,b,c)
{
    if(a>b && a>c)
    {
        return a
    }
    else if(b>c)
    {
        return b
    }
    else
        return c
}
const result=findMax(5,2,3)
console.log("The maximum value is",result)