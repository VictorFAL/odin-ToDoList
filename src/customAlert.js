const customAlert = (() => {
    const alertBg = document.getElementById('alert-bg');
    const alertCont = document.getElementById('alert-container');


    let dialog = `  <div id="alert-box">
                        <div id="alert-header"></div>
                        <div id="alert-body"></div>
                        <div id="alert-footer">
                            <button id="alert-ok">OK</button>
                        </div>
                    </div>`;
    

    let alert = (content, title) => {
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

        if(title === undefined) {
            alertHeader.style.display = 'none';
        } else {
            alertHeader.innerHTML = `${title}`;
        }
        alertBody.innerHTML = `${content}`;

        let btnOk = document.getElementById('alert-ok');
        btnOk.addEventListener('click', () => {
            alertBg.style.display = 'none';
            alertCont.style.display = 'none';
        })
    }

    return {alert};
})();

export default customAlert;