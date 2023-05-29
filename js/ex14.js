function getelement(){
    let sectionEx1 = document.getElementById('ex14');
    return sectionEx1;
}

function render(){
    let section2 = getelement();
    let numero1 = prompt(`Introduce un numero: `);
    let numero2 = prompt(`Introduce otro numero: `);
    let numeroint1 = parseInt(numero1);
    let numeroint2 = parseInt(numero2);
    for (let i=0; i<= 100; i++){
    if(numeroint1 % i == 0 && numeroint2 % i == 0){
        let texto= "Este numero: " + numeroint1 + " y este otro: "  + numeroint2 +  " es divisible entre " + i;
        section2.innerHTML = `<h1>${texto}</h1>`;
        console.log("Este numero: " + numeroint1 + " y este otro: "  + numeroint2 + " es divisible entre " + i);
    }
    else{
        let texto= "Este numero: " + numeroint1 + " y este otro: "  + numeroint2 +  " no es divisible entre " + i;
        section2.innerHTML = `<h1>${texto}</h1>`;
        console.log("Este numero: " + numeroint1 + " y este otro: "  + numeroint2 + " no es divisible entre " + i);
    }
}}

render();