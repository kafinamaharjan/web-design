const colors = ["red", "green", "blue"]
let i 
function containsValue(array, value) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true
    }
  }
  return false
}

console.log(containsValue(colors, "green"))
console.log(containsValue(colors, "yellow"))
