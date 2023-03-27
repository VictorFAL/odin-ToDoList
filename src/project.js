import Task from "./task";

function Project(name) {
    let today = new Date().toJSON().slice(0,10);

    let defaultTask = Task('Dummy', 'This is a dummy task', today, 'medium');
    let tasks = {
        default: defaultTask
    };
    return {name, tasks};
}

export default Project;