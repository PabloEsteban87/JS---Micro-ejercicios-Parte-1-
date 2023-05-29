let numero1 = 3;
let numero2 = 5;

function getelement(){
    let sectionEx1 = document.getElementById('ex2');
    return sectionEx1;
}

function render(num1, num2){
    let section2 = getelement();
    let resultado = num1 + num2;
    section2.innerHTML = `<h1>${resultado}</h1>`;
}

render(numero1, numero2);