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


function buildList() {
    const addProj = document.getElementById('project-add');
    const lstProj = document.getElementById('project-list');

    addProj.addEventListener('click', () => {
        const input = document.createElement('input');
        lstProj.appendChild(input);
        input.focus();
        addProj.disabled = true;

        // Adding a Project
        input.addEventListener('keypress', function(e) {
            if(e.key === 'Enter') {
                if(storageAvailable('localStorage')) {
                    let p = document.createElement('p');
                    p.innerText = input.value;
                    lstProj.appendChild(p)
                    let newProj = Project(input.value);
                    // Add project to storage
                    localStorage.setItem(newProj.name, JSON.stringify(newProj.itemArray));

                    addProj.disabled = false;
                    input.remove();
                } else {
                    alert("Local Storagenot supported, try another browser.");
                }
            }
        });
    });
}

export { sidebarCont, buildList }