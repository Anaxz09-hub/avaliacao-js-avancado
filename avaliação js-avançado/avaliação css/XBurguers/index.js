
function atualizarContagem() {
    const agora = new Date();

    const meiaNoite = new Date();
    meiaNoite.setHours(24, 0, 0, 0);

    const diferenca = meiaNoite - agora;

    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    const horasFormat = String(horas).padStart(2, "0");
    const minutosFormat = String(minutos).padStart(2, "0");
    const segundosFormat = String(segundos).padStart(2, "0");

    document.getElementById("contador").textContent =
        `${horasFormat}:${minutosFormat}:${segundosFormat}`;
}

atualizarContagem();
setInterval(atualizarContagem, 1000);
