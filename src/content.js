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


    delIcon.addEventListener('click', () => {
        div.removeEventListener('click', popContent);
        div.remove();
        //TODO: Remove project from localStorage
        localStorage.removeItem(p.innerText);
    });
}

export default popEvents;