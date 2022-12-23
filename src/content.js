function popContent(p) {
    const content = document.getElementById('content');
    
    p.addEventListener('click', () => {
        let cont = `<h2>${p.innerText}</h2>`;
        content.innerHTML = cont;
    });
}

export default popContent;