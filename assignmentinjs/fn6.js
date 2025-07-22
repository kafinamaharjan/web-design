function getGrade(m){
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
return a
}
const result=getGrade(98)
console.log(result)