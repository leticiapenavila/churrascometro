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

    let quantidade = {};

function adicionarNumero(id) {
    let numerosBox = document.getElementById(id);
    let numeros = parseInt(numerosBox.textContent);
    numeros++;
    numerosBox.textContent = numeros;
    //atualizar o valor 
    quantidade[id] = numeros;
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
}


function diminuirNumero(id) {
    let numerosBox = document.getElementById(id);
    let numeros = parseInt(numerosBox.textContent);
    if (numeros > 0) {
        numeros--;
        numerosBox.textContent = numeros;
    }
    quantidade[id] = numeros;
    localStorage.setItem("quantidade", JSON.stringify(quantidade));
}



















//salvar no localStorage
/*let calculoChurrasco = document.getElementById("calculoChurrasco");

calculoChurrasco.addEventListener("submit", async(event) =>{
    event.preventDefault();

let id = document.getElementById("id");

localStorage.setItem("quantidade", JSON.stringify({id}))})*/
