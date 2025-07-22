//17. Create a simple grade calculator (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60).

let m = 90;
let a;
if (m >= 90)
    a = "A";
else if (m >= 80 && m <= 89)
    a = "B";
else if (m >= 70 && m <= 79)
    a = "C";
else if (m >= 60 && m <= 69)
    a = "D";
else if (m < 60)
    a = "F";
console.log(a);