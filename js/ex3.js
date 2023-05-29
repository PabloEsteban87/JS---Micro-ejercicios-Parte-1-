

function getelement(){
    let sectionEx1 = document.getElementById('ex3');
    return sectionEx1;
}

function render(){
    let section2 = getelement();
    let nombre = prompt(`Introduce tu nombre: `)
    section2.innerHTML = `<h1>${nombre}</h1>`;
}

render();