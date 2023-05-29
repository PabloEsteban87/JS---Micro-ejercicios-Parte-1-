function getelement(){
    let sectionEx1 = document.getElementById('ex10');
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
    }}
    
    return vocales;
}

function contador_vocales_a(vocales_2){
    let contador = 0;
    let texto = "";
    for(let i= 0; i<=vocales_2.length; i++){
    if(vocales_2[i] == 'a' || vocales_2[i] == 'A'){
        contador++;
        texto = "La palabra a aparece " + contador + " veces.";
    }
}
    return texto;
 }

 function contador_vocales_e(vocales_2){
    let contador = 0;
    let texto = "";
    for(let i= 0; i<=vocales_2.length; i++){
    if(vocales_2[i] == 'e' || vocales_2[i] == 'E'){
        contador++;
        texto = "La palabra e aparece " + contador + " veces.";
    }
}
    return texto;
 }

 function contador_vocales_i(vocales_2){
    let contador = 0;
    let texto = "";
    for(let i= 0; i<=vocales_2.length; i++){
    if(vocales_2[i] == 'i' || vocales_2[i] == 'I'){
        contador++;
        texto = "La palabra i aparece " + contador + " veces.";
    }
}
    return texto;
 }

 
 function contador_vocales_o(vocales_2){
    let contador = 0;
    let texto = "";
    for(let i= 0; i<=vocales_2.length; i++){
    if(vocales_2[i] == 'o' || vocales_2[i] == 'O'){
        contador++;
        texto = "La palabra o aparece " + contador + " veces.";
    }
}
    return texto;
 }

 
 function contador_vocales_u(vocales_2){
    let contador = 0;
    let texto = "";
    for(let i= 0; i<=vocales_2.length; i++){
    if(vocales_2[i] == 'u' || vocales_2[i] == 'U'){
        contador++;
        texto = "La palabra u aparece " + contador + " veces.";
    }
}
    return texto;
 }

function imprime(){
    let section2 = getelement();
    let resultado2 = render();
    let contador_a = contador_vocales_a(resultado2);
    let contador_e = contador_vocales_e(resultado2);
    let contador_i = contador_vocales_i(resultado2);
    let contador_o = contador_vocales_o(resultado2);
    let contador_u = contador_vocales_u(resultado2);
    section2.innerHTML = `<h1>${contador_a}<br>${contador_e}<br>${contador_i}<br>${contador_o}<br>${contador_u}</h1>`;
}

imprime();
