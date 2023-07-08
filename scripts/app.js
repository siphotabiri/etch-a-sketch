
function createDivs () {
    const container = document.getElementById('container');
    const content = document.createElement('div');
    content.classList.add('grid-item');
    content.textContent = 1;
    container.appendChild(content); 
}

for (let index = 0; index < 30 ; index++) {
    createDivs();
}

