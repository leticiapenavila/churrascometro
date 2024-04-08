const btClaro = document.querySelector('#btnClaro');
const btEscuro = document.querySelector('#btnEscuro');


btClaro.addEventListener('click', onClickButton);
btEscuro.addEventListener('click', onClickButton);

function onClickButton(event){
    console.dir(event.target.id)

    if(event.target.id == 'btnEscuro'){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }else{
        document.body.classList.add('light');
        document.body.classList.remove('dark');
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
