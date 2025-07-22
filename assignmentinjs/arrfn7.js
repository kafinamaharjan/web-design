const num=[23,0.02,-0,-3,88]
function positive(number){
    let i 
    let positive=[]
    for(i=0;i<number.length;i++)
    {
        if(number[i]>0)
        {
            // positive +=[number[i]]
            positive.push(number[i])
        }
    }
    return positive
}
console.log(positive(num))