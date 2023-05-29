const title = "Hello javascript"

function getelement(){
    let sectionEx1 = document.getElementById('ex1')
    return sectionEx1
}

function render(text){
    let section = getelement();
    console.log(section)
    section.innerHTML = `<h1>${text}</h1>`
}

render(title)