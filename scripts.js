function irASegundaPagina() {
    window.location.href = "segunda-pagina.html";
}

function confirmarAsistencia() {
    window.open("https://wa.link/dm1494", "_blank");
}

function mostrarRegalo() {
    const giftDetail = document.getElementById("giftDetail");
    giftDetail.classList.remove("hidden");
    giftDetail.classList.add("slide-in");
}

function cerrarRegalo() {
    const giftDetail = document.getElementById("giftDetail");
    giftDetail.classList.add("slide-out");
    setTimeout(() => {
        giftDetail.classList.remove("slide-in");
        giftDetail.classList.add("hidden");
        giftDetail.classList.remove("slide-out");
    }, 500);
}

function actualizarCuentaRegresiva() {
    const fechaEvento = new Date("2025-03-01T21:00:00").getTime();
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;

    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById("countdown").innerHTML = "¡El evento ya comenzó!";
    }
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
