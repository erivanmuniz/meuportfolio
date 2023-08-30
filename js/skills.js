var texto = "Minhas habilidades";
var textoElemento = document.querySelector(".apresentacao__conteudo__titulo");
var atraso = 200;

var contadorDeLetras = 0;

function escreverTexto() {
    if (contadorDeLetras < texto.length) {
        textoElemento.textContent += texto.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(escreverTexto, atraso);
    }
   
}

escreverTexto();
