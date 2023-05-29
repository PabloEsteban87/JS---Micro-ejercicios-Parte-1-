function getelement(){
    let sectionEx1 = document.getElementById('ex15');
    return sectionEx1;
}

function render(){
    let section2 = getelement();
    let numero1 = prompt(`Introduce un numero: `);
    let numeroint1 = parseInt(numero1);
    if(numeroint1 > 1){
        if(numeroint1 == 2){
            let texto= "Este numero: " + numeroint1 + " es primo";
            section2.innerHTML = `<h1>${texto}</h1>`;
        }
        else{
        for(let i = 2; i<numeroint1; i++){
        if(numeroint1 % i == 0){
        let texto= "Este numero: " + numeroint1 + " no es primo";
        section2.innerHTML = `<h1>${texto}</h1>`;
        break;
        }
        else{
        let texto= "Este numero: " + numeroint1 + " es primo";
        section2.innerHTML = `<h1>${texto}</h1>`;
    }
}}}}

render();