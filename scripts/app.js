
function createDivs () {
    const container = document.getElementById('container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "square";
    container.appendChild(content); 
}

for (let index = 0; index < 32 ; index++) {
    createDivs();
}