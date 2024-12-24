const task = [{
    title: "Mornig walk",
    dueTime: 0.1, // In minutes
    priority: 2, // Priority levels: High, Medium, Low
}];

const addTask = (collections, task) => {
    collections.push(task);
};

addTask(task,{title: "Brush the teeth",
              dueTime: 0.3, // In minutes
              priority: 1})
addTask(task,{title: "Bath",
              dueTime: 0.2, // In minutes
              priority: 1})
addTask(task,{title: "Reading news paper",
              dueTime: 0.1, // In minutes
              priority: 3})        

function sortTasksByPriority() {
    
    task.sort((a, b) => a.priority- b.priority);
    console.log("Tasks sorted by priority:");
}   

sortTasksByPriority();
console.log(task);

function getTasksDueWithin(minutes) {
    const now = 0; // Assume current time is 0 minutes from now
    const dueTasks = task.filter(task => task.dueTime <= now + minutes);
    console.log(`Tasks due within ${minutes} minutes:`, dueTasks);
    return dueTasks;
}

getTasksDueWithin(15);

function scheduleReminders() {
    task.forEach(task => {
        setTimeout(() => {
            console.log(`Reminder: Task "${task.title}" is due now!`);
        }, task.dueTime * 60000); // Convert minutes to milliseconds
    });
}

scheduleReminders();