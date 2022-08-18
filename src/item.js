function Item(title, desc, dueDate, priority) {
    return {title, desc, dueDate, priority};
}

function Project(name) {
    let itemArray = [];
    return {name, itemArray};
}

export { Item, Project }