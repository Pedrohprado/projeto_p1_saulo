function validar() {
    var nome = formulario.nome;
    var cpf = formulario.cpf;
    var campo = formulario.campo;
    var cadastro = formulario.cadastro;

    if (cadastro.value ==""){
        alert("Informe um cadastro válido");
    }
    
    if (nome.value == "") {
        alert("Nome não informado");
        
        nome.focus();
    }

    if (cpf.value == "") {
        alert("CPF não existente");

        cpf.focus();
    }

    if (campo.value == "") {
        alert("É necessário preencher os campo!");

        campo.focus();
    }

    alert("Formulário enviado com sucesso!");
}