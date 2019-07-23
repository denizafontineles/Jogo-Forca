let palavra = "";
let dica = "";
const palavras = [
    {
        palavra: "MELANCIA",
        dica: "FRUTA"
    }, 
    { 
        palavra: "CAMELO",
        dica: "ANIMAL"
    }, 
    {
        palavra: "GELADEIRA",
        dica: "COZINHA"
    },
    {
        palavra: "RUIVO",
        dica: "CORES"
    }, 
    {
        palavra: "ORTOPEDIA",
        dica: "PROFISSÃO"
    },
    {
        palavra: "BIQUINI",
        dica: "PRAIA"
    },
    {
        palavra: "ORQUIDEA",
        dica: "FLORES"
    },
    {
        palavra: "COMEMORAÇÃO",
        dica: "NATAL"
    },
    {
        palavra: "CARROÇA",
        dica: "FAZENDA"
    },
   
];
let letrasErradas = []
let letrasAcertadas = []
let caracteres = '';
const corpoArray = [
    "corpo2", "corpo4", "corpo3", "corpo5", "corpo6"
]
window.onload = function () {
    inicializa();
}

function renderizar() {
    document.getElementById('palavra').innerHTML = caracteres.split("").join(" ");
}

function sortearPalavra() {
    let objeto = palavras[Math.floor(Math.random() * palavras.length)];
    palavra = objeto.palavra;
    dica = objeto.dica;
}

function inicializa() {
    sortearPalavra();
    esconderCorpo();
    document.getElementById('novamente').disabled = true;
    document.getElementById('chances').innerHTML = tratamentoStringChances(5);
    for (let letra in palavra) {
        caracteres += '_'
    }
    renderizar();
}

function tentativa(botao) {
    botao.disabled = true
    const letra = botao.innerText.toLowerCase()
    const temLetra = (palavra.toLowerCase().indexOf(letra) !== -1)
    
    if (temLetra) {
        substituiLetra(letra)
        letrasAcertadas.push(letra);
    } else if (!temLetra) {
        renderizarErro(letra)
    }
    
    if (letrasAcertadas.length == palavra.length || letrasErradas.length >= 5) {
        desabilitarBotoes()
        document.getElementById('novamente').disabled = false;
    }

    if(caracteres.split("").every(todosLetrasAcertadas)){
        alert("PARABÉNS, VOCÊ É FODA!!!!!!!!!!!!!!!!!!!!!")
    }
}

function todosLetrasAcertadas(letra) {
    return letra !== '_';
}

function renderizarErro(letra) {
    letrasErradas.push(letra);
    const quantidadeChances = (5 - letrasErradas.length);
    document.getElementById('chances').innerHTML = tratamentoStringChances(quantidadeChances);
    renderizaCorpo(quantidadeChances);
}

function renderizaCorpo(chance) {
    const parteDoCorpo = corpoArray[Math.abs(4 - chance)];
    console.log(parteDoCorpo)
    document.getElementById('cabeça').style.display = 'inline';
    document.querySelector('#cabeça img').src = "imagens/" + parteDoCorpo + ".png"

}
function esconderCorpo() {
    for (let item in corpoArray) {
        const parteDoCorpo = corpoArray[item];
        document.getElementById(parteDoCorpo).style.display = 'none';
    }
}

function tratamentoStringChances(quantidade) {
    return "Você tem ".concat(quantidade).concat(" chances")
}

function trocaStringApartirDaPosicao(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function substituiLetra(letraInformada) {
    let posicoes = [];
    for (let item in palavra) {
        const letraNaPlavra = palavra[item];
        if (letraNaPlavra.toLowerCase() == letraInformada.toLowerCase()) {
            posicoes.push(item);
        }
    }
    let caracteresArray = caracteres.split("");
    for (let index in caracteresArray) {
        if (posicoes.includes(index)) {
            caracteresArray[index] = letraInformada.toUpperCase();
        }
    }
    caracteres = caracteresArray.join("");
    renderizar()
}

function desabilitarBotoes() {

    const buttons = document.getElementsByClassName('letra');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function atualizaPagina() {
    location.reload();
}

function renderizarDica() {
    document.getElementById('dica').innerHTML = "Dica: ".concat(dica);
}