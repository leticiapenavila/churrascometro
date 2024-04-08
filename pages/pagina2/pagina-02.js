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


const cadForm = document.getElementById("cad-form");

cadForm.addEventListener("submit", async(event) =>{
    event.preventDefault();

   let nome_usuario = document.getElementById("name").value;
   let email_usuario = document.getElementById("email").value;
   let cep_usuario = document.getElementById("cep").value;

   // salvar no localstorage
   localStorage.setItem("usuario", JSON.stringify({name: nome_usuario, email:email_usuario, cep: cep_usuario}))

})


function checkInput(input){
    if(input.validity.valid){
        input.style.border = 'solid 2px green';
        checkValidityForm()
    }else{
        input.style.border = 'solid 2px red';
    }

}

function checkValidityForm(){
    const formulario = document.getElementById("cad-form")
    const btEnviar = document.getElementById("bt-enviar")

   console.log('checkValidity: ', formulario.checkValidity()) 

   if(formulario.checkValidity()){
        btEnviar.disabled = false;
        
   }else{
        btEnviar.disabled = true;
       
   }
}

