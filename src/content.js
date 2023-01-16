import customAlert from "./customAlert";

function popContent(p) {
    const content = document.getElementById('content');
    
    p.addEventListener('click', () => {
        let cont = `   <div>
                            <h2>${p.innerText}</h2>
                            <button id="task-add">Add Task</button>
                        </div>
                        <div id="task-list"></div>`;
        content.innerHTML = cont;

        let addTask = document.getElementById('task-add');
        addTask.addEventListener('click', () => {
            customAlert.alert('<input id="task-input">', "<h3>Insert a task</h3>");
            let input = document.getElementById('task-input');
            input.focus();

            let okBtn = document.querySelector('#alert-ok');
            okBtn.addEventListener('click', () => {
                if(input.value != '') {
                    //Add task to project in local storage
                }
            });
        });

        let tasks = localStorage.getItem(p.innerText);
        if(tasks.length > 0) {
            //Populate tasks
        }
    });
}

export default popContent;