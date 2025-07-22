function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(["hello","hi","hi",1,1,2,2,3,4,5]))