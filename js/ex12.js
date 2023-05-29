function getelement(){
    let sectionEx1 = document.getElementById('ex11');
    return sectionEx1;
}

function nuevo_numero(){
    let numero1 = prompt(`Introduce un numero: `);
    let numeroint1 = parseInt(numero1);
    return numeroint1;
    
}

function divisible_2(numeroint1){
    
    if(numeroint1 % 2 == 0){
        let texto = "Este numero: " + numeroint1 + " es divisible entre 2";
        return texto;
    }
    else{
        let texto= "Este numero: " + numeroint1 + " no es divisible entre 2";
        return texto;
    }
}

function divisible_3(numeroint1){
    
    if(numeroint1 % 3 == 0){
        let texto = "Este numero: " + numeroint1 + " es divisible entre 3";
        return texto;
    }
    else{
        let texto= "Este numero: " + numeroint1 + " no es divisible entre 3";
        return texto;
    }
}

function divisible_5(numeroint1){
    
    if(numeroint1 % 5 == 0){
        let texto = "Este numero: " + numeroint1 + " es divisible entre 5";
        return texto;
    }
    else{
        let texto= "Este numero: " + numeroint1 + " no es divisible entre 5";
        return texto;
    }
}

function divisible_7(numeroint1){
    
    if(numeroint1 % 7 == 0){
        let texto = "Este numero: " + numeroint1 + " es divisible entre 7";
        return texto;
    }
    else{
        let texto= "Este numero: " + numeroint1 + " no es divisible entre 7";
        return texto;
    }
}

function imprime(){
    let section2 =  getelement(); 
    let numero = nuevo_numero();
    let div_2 = divisible_2(numero);
    let div_3 = divisible_3(numero);
    let div_5 = divisible_5(numero);
    let div_7 = divisible_7(numero);
    section2.innerHTML = `<h1>${div_2}<br>${div_3}<br>${div_5}<br>${div_7}</h1>`;
}

imprime();