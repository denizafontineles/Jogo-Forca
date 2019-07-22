const palavra = "deniza"
let letrasErradas = []
let letrasAcertadas = []
function tentativa(botao){
    botao.disabled = true
    const letra = botao.innerText.toLowerCase()
    const temLetra = (palavra.toLowerCase().indexOf(letra) !== -1)

    if(!temLetra)
        letrasErradas.push(letra)
    if(temLetra)
        letrasAcertadas.push(letra)
     
    if(letrasAcertadas.length == palavra.length || letrasErradas.length >= 6)
        desabilitarBotoes()

    console.log(letrasAcertadas)
}

function desabilitarBotoes(){

    const buttons = document.getElementsByClassName('letra');
    for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled= true;
    }
}
