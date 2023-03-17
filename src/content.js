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
            customAlert.alert('<input id="task-input">', "<h3>Insert a task</h3>");
            let input = document.getElementById('task-input');
            input.focus();

            let okBtn = document.querySelector('#alert-ok');
            okBtn.addEventListener('click', () => {
                //==================TEST===================
                let taskArr = localStorage.getItem(p.innerText);
                console.log(`${taskArr} - ${typeof taskArr}`);
                console.log(`${JSON.parse('["test", "test2"]')}`);
                //=========================================
                if(input.value != '') {
                    //TODO: Add task to project in local storage
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