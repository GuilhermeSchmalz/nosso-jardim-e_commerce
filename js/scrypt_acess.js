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
    document.getElementById("lb-more").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("lb-less").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("inst").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-institucional").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ajuda").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-ajuda").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("mais").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-mais").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("dest").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-destaque").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("espe").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-especial").style.fontSize = tamanho_padrao + "rem";

});

document.getElementById("diminuir-fonte").addEventListener("click", function(){ //função para dominuir a fonte quando clicado
    if (tamanho_padrao > 1)
    tamanho_padrao--;
    document.getElementById("home").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("produtos").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("contato").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("cadastrar").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("gerenciar").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("lb-more").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("lb-less").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("inst").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-institucional").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ajuda").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-ajuda").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("mais").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-mais").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("dest").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-destaque").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("espe").style.fontSize = tamanho_padrao + "rem";
    document.getElementById("ul-especial").style.fontSize = tamanho_padrao + "rem";

});
