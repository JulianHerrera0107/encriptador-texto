const textArea = document.querySelector(".Cont_texto");
const mensaje = document.querySelector(".Cont_texto_resultado");
const imagenMuneco = document.querySelector(".Cont_imagen_muneco");
const textoMensaje = document.querySelector(".Cont_text_mensaje");

//Arreglos Multidimensionales
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"
*/

function ocultarAdelante(){
    imagenMuneco.classList.add("ocultar");
    textoMensaje.classList.add("ocultar");
}

function btnEncriptar(){
    ocultarAdelante()
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    console.log(encriptar(textArea.value));
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            /*Aplicamos la propiedad "replaceAll(Cadena original, Cadena reemplazada)" 
            para modificar todos los elementos*/
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    ocultarAdelante()
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    console.log(desencriptar(textArea.value));
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}
