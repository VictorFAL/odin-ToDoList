import customAlert from "./customAlert";
import Task from "./task";

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

            let title = document.getElementById('task-title');
            title.focus();
            let desc = document.getElementById('task-desc');
            let date = document.getElementById('task-date');
            let prio = document.getElementById('task-priority');

            let okBtn = document.querySelector('#alert-ok');
            okBtn.addEventListener('click', () => {
                if(title.value != '') {
                    //TODO: Add task to project in local storage
                    let newTask = Task(title.value, desc.value, date.value, prio.value);
                    let project = localStorage.getItem(p.innerText);

                    project[newTask.title] = JSON.stringify(newTask);

                    //==================TEST===================
                    console.log(localStorage.getItem(p.innerText));
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
        content.innerHTML = '';
        localStorage.removeItem(p.innerText);
    });
}

export default popEvents;