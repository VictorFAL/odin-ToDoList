import customAlert from "./customAlert";

function popEvents(div) {
    const content = document.getElementById('content');
    let p = div.querySelector('p');
    let delIcon = div.querySelector('svg');

    function popContent() {
        let cont = `   <div>
                            <h2>${p.innerText}</h2>
                            <button id="task-add">Add Task</button>
                        </div>
                        <div id="task-list"></div>`;
        content.innerHTML = cont;

        let addTask = document.getElementById('task-add');
        addTask.addEventListener('click', () => {
            customAlert.alert(` <input id="task-title">
                                <textarea id="task-desc"></textarea>
                                <input type="date" id="task-date">
                                <select id="task-priority">
                                    <option value="low">Low</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="high">High</option>
                                </select>`, 
            "<h3>Insert a task</h3>");
            let taskTitle = document.getElementById('task-title');
            taskTitle.focus();

            let okBtn = document.querySelector('#alert-ok');
            okBtn.addEventListener('click', () => {
                if(taskTitle.value != '') {
                    //TODO: Add task to project in local storage

                    //==================TEST===================
                    let tasks = localStorage.getItem(p.innerText);
                
                    //=========================================
                }
            });
        });

        let tasks = localStorage.getItem(p.innerText);
        if(tasks.length > 0) {
            //TODO: Populate tasks
        }
    }
    
    div.addEventListener('click', popContent);

    // Delete project
    delIcon.addEventListener('click', () => {
        div.removeEventListener('click', popContent);
        div.remove();
        localStorage.removeItem(p.innerText);
    });
}

export default popEvents;