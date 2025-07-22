//13. Create a greeting message that changes based on the time of day (morning/evening).


let time = new Date();
let a = null;
let c = time.getHours();
if (a < 12)
    a = "Good Morning";
else
    a = "Good Afternoon";
console.log(a);