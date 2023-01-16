import addIcon from './assets/imgs/addSide.svg';
import Project from './project';
import storageAvailable from './storage'
import customAlert from './customAlert';
import popContent from './content';

let sidebarCont = ` <div>
                        <h2>Projects</h2>
                        <button id="project-add">
                            <img src=${addIcon}>
                        </button>
                    </div>
                    <div id="project-list"></div>`;


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
                    let p = document.createElement('p');
                    p.innerText = input.value;
                    lstProj.appendChild(p);
                    let newProj = Project(input.value);
                    // Add project to storage
                    let itemArray = JSON.stringify(newProj.itemArray);
                    localStorage.setItem(newProj.name, itemArray);

                    // Add click event to project
                    popContent(p);
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
        if(localStorage.length > 0) {
            const lstProj = document.getElementById('project-list'); 

            let keys = Object.keys(localStorage);
            for(let key of keys) {
                console.log(`${key}: ${localStorage.getItem(key)}`);
                let p = document.createElement('p');
                p.innerText = key;
                lstProj.appendChild(p);

                // Add click events when page loads
                popContent(p);
            }
        }
    }
}

export { sidebarCont, addProject, popList }