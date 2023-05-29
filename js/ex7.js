function getelement(){
    let sectionEx1 = document.getElementById('ex7');
    return sectionEx1;
}

function render(){
    let contador = 0;
    let frase = prompt(`Pon una frase: `);
    for (let i= 0; i<=frase.length; i++){
    if((frase[i] == "a") || (frase[i] == "A")) {
    contador++;
    }
    }
    return contador;
}

function imprime_a(){
    let section2 = getelement();
    let resultado2 = render();
    section2.innerHTML = `<h1>${resultado2}</h1>`;
}

imprime_a();