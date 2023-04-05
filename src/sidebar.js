import addIcon from './assets/imgs/addSide.svg';
import Project from './project';
import storageAvailable from './storage'
import customAlert from './customAlert';
import popEvents from './content';

let sidebarCont = ` <div>
                        <h2>Projects</h2>
                        <button id="project-add">
                            <img src=${addIcon}>
                        </button>
                    </div>
                    <div id="project-list"></div>`;

const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/>
                    </svg>`


// Add projet to the list and storage by clicking the button
function addProject() {
    const addProj = document.getElementById('project-add');
    const lstProj = document.getElementById('project-list');

    addProj.addEventListener('click', () => {
        customAlert.alert('<input id="proj-input">', "<h3>Insert the project's name</h3>");
        let input = document.getElementById('proj-input');
        input.focus();

        let okBtn = document.querySelector('#alert-ok');
        okBtn.addEventListener('click', () => {
            if(input.value != '') {
                if(storageAvailable('localStorage')) {
                    let div = document.createElement('div');
                    let p = document.createElement('p');
                    p.innerText = input.value;

                    lstProj.appendChild(div);
                    div.appendChild(p);
                    div.innerHTML += deleteIcon;

                    let newProj = Project(input.value);
                    // Add project to storage
                    let tasks = JSON.stringify(newProj.tasks);
                    localStorage.setItem(newProj.name, tasks);

                    // Add click event to project
                    popEvents(div);
                } else {
                    alert("Local Storage not supported, try another browser.");
                }
            }
        });
    });
}


// Populate project list with localStorage
function popList() {
    window.onload = function() {
        const lstProj = document.getElementById('project-list');

        if(localStorage.length > 0) {
            let keys = Object.keys(localStorage);
            for(let key of keys) {
                let div = document.createElement('div');
                let p = document.createElement('p');
                p.innerText = key;

                lstProj.appendChild(div);
                div.appendChild(p);
                div.innerHTML += deleteIcon;

                // Add click events when page loads
                popEvents(div);
            }
        } else {
            // Create Default project if localStorage is empty
            let newProj = Project('Default');
            // Add project to storage
            let tasks = JSON.stringify(newProj.tasks);
            localStorage.setItem(newProj.name, tasks);

            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = newProj.name;

            lstProj.appendChild(div);
            div.appendChild(p);
            div.innerHTML += deleteIcon;

            // Add click event to project
            popEvents(div);
        }
    }
}

export { sidebarCont, addProject, popList }