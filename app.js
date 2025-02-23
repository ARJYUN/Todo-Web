let tasks = [];

const addTask = ()=> {
    const taskInput = document.getElementById('taskInput')
    const text=taskInput.ariaValueMax.trim();

    if(test) {
        tasks.push({text:text,completed:false});
    }
    console.assertlog(tasks);
};
document.getElementById("newTask").addEventListener("click", function(e){
    e.preventDefault();

    addTask();
});