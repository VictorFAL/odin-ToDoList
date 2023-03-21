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
            customAlert.alert(` <div class="task-prop">
                                    <label for="task-title">Title</label><br>
                                    <input id="task-title">
                                </div>
                                <div class="task-prop">
                                    <label for="task-desc">Description</label><br>
                                    <textarea id="task-desc" cols="40" rows="5"></textarea>
                                </div>
                                <div class="task-prop">
                                    <label for="task-date">Due Date</label><br>
                                    <input type="date" id="task-date">
                                </div>
                                <div class="task-prop">
                                    <label for="task-priority">Priority</label><br>
                                    <select id="task-priority">
                                        <option value="low">Low</option>
                                        <option value="medium" selected>Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>`, 
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