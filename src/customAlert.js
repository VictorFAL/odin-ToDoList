import popContent from "./content";

const customAlert = (() => {
    const alertBg = document.getElementById('alert-bg');
    const alertCont = document.getElementById('alert-container');


    let dialog = `  <div id="alert-box">
                        <div id="alert-header"></div>
                        <div id="alert-body"></div>
                        <div id="alert-footer">
                            <button id="alert-cancel">Cancel</button>
                            <button id="alert-ok">OK</button>
                        </div>
                    </div>`;
    

    let alert = (title, content, tasks, projName) => {
        alertCont.innerHTML += dialog;
        
        const alertBox = document.getElementById('alert-box');
        const alertHeader = document.getElementById('alert-header');
        const alertBody = document.getElementById('alert-body');

        alertBg.style.display = 'block';

        alertCont.style.display = 'flex';
        alertCont.style.justifyContent = 'center';
        alertCont.style.alignItems = 'center';

        alertBox.style.display = 'flex';
        alertBox.style.flexDirection = 'column';

        let btnOk = document.getElementById('alert-ok');
        btnOk.addEventListener('click', () => {
            alertBg.style.display = 'none';
            alertCont.style.display = 'none';
        })

        let btnCancel = document.getElementById('alert-cancel');
        btnCancel.addEventListener('click', () => {
            alertBg.style.display = 'none';
            alertCont.style.display = 'none';
        })

        if(title === undefined) {
            alertHeader.style.display = 'none';
        } else {
            alertHeader.innerHTML = `${title}`;
        }
        alertBody.innerHTML = `${content}`;

        // Replace 'Cancel' button with a 'Delete' button if needed
        if(tasks != undefined) {
            btnCancel.innerText = 'Delete';
            btnCancel.style.backgroundColor = 'red';

            // TODO: Add "delete task" functionality
            btnCancel.addEventListener('click', () => {
                let taskName = title.innerText;
                delete tasks[taskName];
        
                console.log(tasks)
        
                //TODO: Repopulate tasks with new modified list
                popContent(projName);
            }, { once: true });
        }
    }

    return {alert};
})();

export default customAlert;