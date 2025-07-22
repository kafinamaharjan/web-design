const num=[12,90,78,65,88]
const total = getnum(num)
function getnum(aa){
    let sum=0
    let i 
    for(i=0; i<aa.length;i++){
        sum+=aa[i]
    }
    return sum
}
console.log(num)
console.log("Sum is:",total)