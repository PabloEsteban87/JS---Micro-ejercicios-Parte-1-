function getelement(){
    let sectionEx1 = document.getElementById('ex9');
    return sectionEx1;
}

function render(){
    let vocales = [];
    let vocales_1 = [];
    
    let frase = prompt(`Pon una frase: `);
    let frase_array_1 = [];
   
    for (let i= 0; i<=frase.length; i++){
        frase_array_1[i] = frase;
        let frase_array = frase_array_1[i].split("");
    
    if((frase_array[i] == "a") || (frase_array[i] == "A") || (frase_array[i] == "e") || (frase_array[i] == "E") || (frase_array[i] == "i") ||
    (frase_array[i] == "I") || (frase_array[i] == "o") || (frase_array[i] == "O") || (frase_array[i] == "u") || (frase_array[i] == "U"))    {
    vocales[i] = frase_array[i];
    vocales_1 = vocales.join(" ");
    }}
    
    return vocales_1;
}

function imprime(){
    let section2 = getelement();
    let resultado2 = render();
    section2.innerHTML = `<h1>${resultado2}</h1>`;
}

imprime();