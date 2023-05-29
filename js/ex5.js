function getelement(){
    let sectionEx1 = document.getElementById('ex5');
    return sectionEx1;
}

function render(){
    let section2 = getelement();
    let numero1 = prompt(`Introduce primer numero: `);
    let numero2 = prompt(`Introduce segundo numero: `);
    let numeroint1 = parseInt(numero1);
    let numeroint2 = parseInt(numero2);
    let mayor;
    if (numeroint1 > numeroint2){
        mayor = numeroint1;
    }
    else{
        mayor = numeroint2;
    }
    let resultado2 = "El mayor es: " + mayor;
    section2.innerHTML = `<h1>${resultado2}</h1>`;
}

render();