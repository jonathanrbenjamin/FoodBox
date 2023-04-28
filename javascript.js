let buque;
let girassol;
let sobremesa;

function escolherFrango() {
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("carne").style.borderColor = "white";
    buque = "Ramalhete 20 Rosas";
}



function escolherCarne() {
    document.getElementById("carne").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    buque = "Buquê 24 Rosas";
}

function escolherCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("refresco").style.borderColor = "white";
    girassol = "Surpresa de Girassóis"
}

function escolherRefresco() {
    document.getElementById("refresco").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    girassol = "Buquê Mix Flores Te Amo"
}

function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("sorvete").style.borderColor = "white";
    presente = "Amandita"
}

function escolherSorvete() {
    document.getElementById("sorvete").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    presente = "Guloseimas"
}

function finalizarPedido() {
    let mensagem;
    mensagem = "Olá, gostaria de pedir um combo: " +
    buque + 
    ", " +
    girassol +
    " e " +
    presente;

    window.open("https://wa.me/+5511982299607?text=" + mensagem.clean(undefined))

}
