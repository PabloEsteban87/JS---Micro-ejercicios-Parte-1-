function getelement(){
    let sectionEx1 = document.getElementById('ex11');
    return sectionEx1;
}

function render(){
    let section2 = getelement();
    let numero1 = prompt(`Introduce un numero: `);
    let numeroint1 = parseInt(numero1);
    if(numeroint1 % 2 == 0){
        let texto= "Este numero: " + numeroint1 + " es divisible entre 2";
        section2.innerHTML = `<h1>${texto}</h1>`;
    }
    else{
        let texto= "Este numero: " + numeroint1 + " no es divisible entre 2";
        section2.innerHTML = `<h1>${texto}</h1>`;
    }
}

render();