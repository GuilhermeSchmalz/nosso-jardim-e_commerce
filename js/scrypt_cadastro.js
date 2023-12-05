//Recuperar os cadastros salvos no localStorage ao carregar a página
window.onload = function () {
  carregarCadastrosSalvos();
};

function cadastrar() {
  var nome = document.getElementById("nome").value;
  var dtn = document.getElementById("dtn").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (nome && dtn && email && senha) {
    // Cria um objeto representando o cadastro
    var novoCadastro = {
      nome: nome,
      dtn: dtn,
      email: email,
      senha: senha,
    };

    // Salva a cadastro no localStorage
    salvarCadastro(novoCadastro);

    // Adiciona a cadastro à lista na interface
    adicionarCadastroNaLista(novoCadastro);

    // Limpa o formulário após o cadastro
    document.getElementById("nome").value = "";
    document.getElementById("dtn").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
  } else {
    alert("Preencha todos os campos do formulário.");
  }
}

//Listagem
function adicionarCadastroNaLista(cadastro) {
  var listaCadastros = document.getElementById("listaCadastros");
  var novoCadastro = document.createElement("li");
  novoCadastro.innerHTML = `<strong>${cadastro.nome}</strong> - Data de nascimento: ${cadastro.dtn} E-mail: ${cadastro.email}`;
  listaCadastros.appendChild(novoCadastro);
}

function salvarCadastro(cadastro) {
  // Recupera os cadastros salvos no localStorage
  var cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros")) || [];

  // Adiciona o novo cadastro à lista de cadastros
  cadastrosSalvos.push(cadastro);

  // Salva a lista atualizada no localStorage
  localStorage.setItem("cadastros", JSON.stringify(cadastrosSalvos));
}

function carregarCadastrosSalvos() {
  // Recupera os cadastros salvos no localStorage
  var cadastrosSalvos = JSON.parse(localStorage.getItem("cadastros")) || [];

  // Adiciona os cadastros à lista na interface
  cadastrosSalvos.forEach(adicionarCadastroNaLista(cadastro));
}



//Tema
const switcher = document.querySelector('.btn-tema');

switcher.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme')

    console.log('current class name: '+ className)

});

//Acessibilidade

var tamanho_padrao = 1; //Tamanho da fonte

document.getElementById("aumentar-fonte").addEventListener("click", function(){ //função para aumentar a fonte quando clicado
    if (tamanho_padrao < 6)
    tamanho_padrao++;
    document.getElementById("home").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("produtos").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("contato").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("cadastrar").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("gerenciar").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("h1").style.fontSize = tamanho_padrao + "rem";

  });

document.getElementById("diminuir-fonte").addEventListener("click", function(){ //função para dominuir a fonte quando clicado
    if (tamanho_padrao > 1)

    tamanho_padrao--;
    document.getElementById("home").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("produtos").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("contato").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("cadastrar").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("gerenciar").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("h1").style.fontSize = tamanho_padrao + "rem";

});
