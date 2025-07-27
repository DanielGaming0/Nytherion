function atualizarCronometro() {
  const destino = new Date("2025-07-27T16:00:00-03:00").getTime(); // horário de Brasília
  const agora = new Date().getTime();
  const tempoRestante = destino - agora;

  if (tempoRestante <= 0) {
    document.getElementById("countdown").textContent = "00:00:00";
    clearInterval(intervalo);
    return;
  }

  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

const intervalo = setInterval(atualizarCronometro, 1000);
atualizarCronometro();
