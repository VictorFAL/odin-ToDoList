import addIcon from './assets/imgs/addSide.svg';
import Project from './project';


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
                let p = document.createElement('p');
                p.innerText = input.value;
                lstProj.appendChild(p)
                let newProj = Project(input.value);
                // TODO: Add project to storage

                addProj.disabled = false;
                input.remove();
            }
        });
    });
}

export { sidebarCont, buildList }