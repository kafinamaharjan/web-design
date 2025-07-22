//25. Create a loop that finds all numbers between 1 and 50 that are divisible by 7

let i;
console.log("no. divisible by 7 between 1 and 50:");
for (i = 1; i < 50; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}