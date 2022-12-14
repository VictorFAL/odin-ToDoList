function populateContent(p) {
    const content = document.getElementById('content');

    let cont = `<h2>${p.innerText}</h2>`;
    content.innerHTML = cont;
}

export default populateContent;