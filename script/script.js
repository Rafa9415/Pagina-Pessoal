console.log("Minha script está funcionando");

const checkForm = {
    Nome: false,
    email: false,
    numero: false,
    mensagem: false,
}
//Nome
document.getElementById('Nome').addEventListener('input',function (e) {
    const Nome = e.target.value;
    if(Nome.length > 50 || Nome.length <= 0){
        document.getElementById('nome-error').style.display="block";
        checkForm.Nome = false;
    }else{
        document.getElementById('nome-error').style.display="none";
        checkForm.Nome = true;
        console.log(checkForm);
    }
    enableButton();
} 
);
    //email
document.getElementById('email').addEventListener('input',function (e) {
    const email = e.target.value;
    if(validarEmail(email)){
        document.getElementById('email-error').style.display="block";
        checkForm.email = false;
    }else{
        document.getElementById('email-error').style.display="none";
        checkForm.email = true;
        console.log(checkForm);
    }
    enableButton();
} 
);
    //telefone
  document.getElementById('numero').addEventListener('input',function (e) {
    const numero = e.target.value;
    if(validarNumero(numero)){
        document.getElementById('numero-error').style.display="block";
        checkForm.numero = false;
    }else{
        document.getElementById('numero-error').style.display="none";
        checkForm.numero = true;
        console.log(checkForm);
    }
    enableButton();
} 
);

    //mensagem
document.getElementById('mensagem').addEventListener('input',function (e) {
    const mensagem = e.target.value;
    if(mensagem.length > 500 || mensagem.length <= 0){
        document.getElementById('mensagem-error').style.display="block";
        checkForm.mensagem = false;
    }else{
        document.getElementById('mensagem-error').style.display="none";
        checkForm.mensagem = true;
        console.log(checkForm);
    }
    enableButton();
} 
);
    //email
//function validarEmail(email) {
//    var re = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
//   return re.test(email);
// }
function validarEmail(str){
    let pattern = new RegExp ('^[^@]+@[^@]+\.[^@]+');
    return !pattern.test(str);
}


    //numero de telefone 
function validarNumero(str) {
    let pattern = new RegExp ('^((\\+1)?\\s?\\(\\d{3}\\)\\s?\\d{3}\\-\\d{4})?$');
    return !pattern.test(str);
}
    //botão
function enableButton(){
    const button = document.getElementById("button");
    if(checkForm.Nome &&
      checkForm.email &&
      checkForm.numero &&
      checkForm.mensagem){
      button.disabled = false;
    }else{
        button.disabled = true;
    }
}