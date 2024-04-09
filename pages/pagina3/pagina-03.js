const btClaro = document.querySelector('#btnClaro');
const btEscuro = document.querySelector('#btnEscuro');


btClaro.addEventListener('click', onClickButton);
btEscuro.addEventListener('click', onClickButton);

function onClickButton(event){
    console.dir(event.target.id)

    if(event.target.id == 'btnEscuro'){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light'); 
    }
};

window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
    }
};



let result = JSON.parse (localStorage.getItem("quantidade"));

let quantidade = {
    numerosHomens: result.numerosHomens,
    numerosMulheres: result.numerosMulheres,
    numerosCriancas: result.numerosCriancas
};

const totalConvidados = document.createElement('h2')
const convidados = document.createElement('h2')
const somaConvidados = result.numerosHomens+ result.numerosMulheres +result.numerosCriancas 

totalConvidados.innerHTML = `${somaConvidados} convidados `

convidados.innerText = `Homens: ${result.numerosHomens} Mulheres: ${result.numerosMulheres} Crianças: ${result.numerosCriancas}`

document.body.appendChild( convidados)
document.body.appendChild(totalConvidados)

    const carneHomem = 0.4;
    const carneMulher = 0.32;
    const carneCrianca = 0.2;

    const paoAdulto = 2;
    const paoCrianca = 1;

    const carvao = 1;

    const sal = 0.04;
    const geloPorPessoa = 5;
    const refrigerantePorPessoa = 0.2; // 1 garrafa de 2L a cada 5 pessoas
    const aguaPorPessoa = 0.2; // 1 garrafa de 1L a cada 5 pessoas
    const cervejaPorPessoa = 3;

    const totalHomens = quantidade.numerosHomens ;
    const totalMulheres = quantidade.numerosMulheres ;
    const totalCriancas = quantidade.numerosCriancas ;
    const totalAdultos = totalHomens + totalMulheres;

    const quantidadeCarne = totalHomens * carneHomem + totalMulheres * carneMulher + totalCriancas * carneCrianca;
    const quantidadePao = totalAdultos * paoAdulto + totalCriancas * paoCrianca;
    const quantidadeCarvao = (totalHomens + totalMulheres + totalCriancas) * carvao;
    const quantidadeSal = (totalHomens + totalMulheres + totalCriancas) * sal;
    const quantidadeGelo = Math.ceil((totalHomens + totalMulheres + totalCriancas) / 10) * geloPorPessoa;
    const quantidadeRefrigerante = Math.ceil((totalHomens + totalMulheres + totalCriancas) / 5) * refrigerantePorPessoa;
    const quantidadeAgua = Math.ceil((totalHomens + totalMulheres + totalCriancas) / 5) * aguaPorPessoa;
    const quantidadeCerveja = totalAdultos * cervejaPorPessoa;


    document.getElementById("quantidadeCarne").textContent = quantidadeCarne.toFixed(2) + " KG";
    document.getElementById("quantidadePao").textContent = quantidadePao;
    document.getElementById("quantidadeCarvao").textContent = quantidadeCarvao + " KG";
    document.getElementById("quantidadeSal").textContent = quantidadeSal.toFixed(2) + " KG";
    document.getElementById("quantidadeGelo").textContent = quantidadeGelo + " KG";
    document.getElementById("quantidadeRefrigerante").textContent = quantidadeRefrigerante.toFixed(2) + " L";
    document.getElementById("quantidadeAgua").textContent = quantidadeAgua.toFixed(2) + " L";
    document.getElementById("quantidadeCerveja").textContent = quantidadeCerveja + " garrafas de 600ml";