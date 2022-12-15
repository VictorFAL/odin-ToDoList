const customAlert = (() => {
    let dialog = `  <div id="alert-bg"></div>
                    <div id="alert-box">
                        <div>
                            <div id="alert-header"></div>
                            <div id="alert-body"></div>
                            <div id="alert-footer"></div>
                        </div>
                    </div>`;

    const alertBg = document.getElementById('alert-bg');
    const alertBox = document.getElementById('alert-box');
    const alertHeader = document.getElementById('alert-header');
    const alertBody = document.getElementById('alert-body');
    const alertFoot = document.getElementById('alert-footer');

    alert = (content, title) => {
        document.body.innerHTML = document.body.innerHTML + dialog;

        let height = window.innerHeight;
        alertBg.style.height = height + 'px';

        alertBox.style.top = "100px";

        alertBg.style.display = 'block';
        alertBox.style.display = 'block';
        alertHeader.style.display = 'block';

        if(title === undefined) {
            alertHeader.style.display = 'none';
        } else {
            alertHeader.innerHTML = `${title}`;
        }
        alertBody.innerHTML = `${content}`;
        alertFoot.innerHTML =`<button id="alert-ok" onclick="customAlert.ok()">OK</button>`;
    }

    ok = () => {
        alertBox.style.display = 'none';
        alertBg.style.display = 'none';
    }

    return {alert, ok};
})();

export default customAlert;