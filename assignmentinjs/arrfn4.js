const num=[12,90,78,65,88]
const total = getnum(num)
function getnum(total){
    let sum=0
    let avg=0
    let i 
    for(i=0; i<total.length;i++){
        sum+=num[i]
        avg+=sum/total.length
    }
    return avg
}
console.log(num)
console.log("Average is:",total)