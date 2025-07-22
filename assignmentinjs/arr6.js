const num=[78,88,5,3,8]
let l=num[0]
let i 
for(i=0;i<num.length;i++){
    if(num[i]>l){
        l=num[i]
    }
}
console.log("The largest number is",l)