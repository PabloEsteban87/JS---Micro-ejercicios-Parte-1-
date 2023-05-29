function getelement(){
    let sectionEx1 = document.getElementById('ex4');
    return sectionEx1;
}

function render(){
    let section2 = getelement();
    let numero1 = prompt(`Introduce primer numero: `);
    let numero2 = prompt(`Introduce segundo numero: `);
    let numeroint1 = parseInt(numero1);
    let numeroint2 = parseInt(numero2);
    let resultado1 = numeroint1 + numeroint2;
    let resultado2 = "El resultado es: " + resultado1;
    section2.innerHTML = `<h1>${resultado2}</h1>`;
}

render();