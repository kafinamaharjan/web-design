const a=document.getElementById("text");
const submitButton=document.getElementById("addTask");
const taskList = document.getElementById("taskList")

submitButton.addEventListener("click", function()
{
    const a=input.value;
    if(a!==""){
        const li = document.createElement("li");
        li.innerHTML=`${a} <button onclick="removeTask()">Remove</button>`
        taskList.appendchild(li);
        input.value="";
    }
});

function removeTask(){
    const li=button.parentElement;
    li.remove();
}