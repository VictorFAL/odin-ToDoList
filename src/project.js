import Task from "./task";

function Project(name) {
    let tasks = {};
    return {name, tasks};
}

export default Project;