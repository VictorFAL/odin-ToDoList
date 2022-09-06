import addIcon from './assets/imgs/addSide.svg';
import Project from './project';
import storageAvailable from './storage';


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
        const input = document.createElement('input');
        lstProj.appendChild(input);
        input.focus();
        addProj.disabled = true;

        // Adding a Project on Enter keypress
        input.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                if(storageAvailable('localStorage')) {
                    let p = document.createElement('p');
                    p.innerText = input.value;
                    lstProj.appendChild(p);
                    let newProj = Project(input.value);
                    // Add project to storage
                    let itemArray = JSON.stringify(newProj.itemArray);
                    localStorage.setItem(newProj.name, itemArray);

                    addProj.disabled = false;
                    input.remove();
                } else {
                    alert("Local Storage not supported, try another browser.");
                }
            }
        });
    });
}


// Populate porject list with localStorage
function popList() {
    window.onload = function() {
        if(localStorage.length > 0) {
            const lstProj = document.getElementById('project-list'); 

            let keys = Object.keys(localStorage);
            for(let key of keys) {
                // console.log(`${key}: ${localStorage.getItem(key)}`);
                let p = document.createElement('p');
                p.innerText = key;
                lstProj.appendChild(p);
            }
        }
    }
}

export { sidebarCont, addProject, popList }