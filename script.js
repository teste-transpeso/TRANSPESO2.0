function ganhaCor(id){
    let elemento = document.getElementById(id)
    elemento.style.fontSize = '10pt';
    elemento.style.transition = '0.3s';
    elemento.style.filter = "grayscale(0%)"
    elemento.style.width = "200px"
     
     
     console.log(elemento)
}
function perdeCor(id){
    let elemento = document.getElementById(id)
    elemento.style.fontSize = '120%';
     elemento.style.filter = "grayscale(100%)"
     elemento.style.width = "180px"
     console.log(elemento)
}



function GanhaNome(id){
    let h2 = document.getElementById(id)
    h2.style.transition = ("0.5s")
    h2.style.marginTop = ("0px")

    let nome =  document.getElementsByClassName('titu-zap')
    nome[id].style.transition = ("0.5s")
    nome[id].style.marginTop = ("9px")
    nome[id].style.visibility = ("visible")
}

function PerdeNome(id){
    let h2 = document.getElementById(id)
    h2.style.transition = ("0.5s")
    h2.style.marginTop = ("20px")

    let nome =  document.getElementsByClassName('titu-zap')
    console.log(nome[id]);
    nome[id].style.transition = ("0.5s")
    nome[id].style.marginTop = ("0px")
    nome[id].style.visibility = ("hidden")
}

