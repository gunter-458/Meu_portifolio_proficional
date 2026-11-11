
const timerDisplay = document.getElementById("timerDisplay");
const timerProgress = document.getElementById("timerProgress");

const inputHoras = document.getElementById("hours");
const inputMinutos = document.getElementById("minutes");
const inputSegundos = document.getElementById("seconds");

const botaoIniciar = document.getElementById("startPauseBtn");
const botaoResetar = document.getElementById("resetBtn");

const timerMessage = document.getElementById("timerMessage");

const raio = 90;
const circunferencia = 2 * Math.PI * raio;

let intervalo = null;
let tempoTotal = 1800;
let tempoRestante = 1800;
let instanteFinal = null;
let executando = false;

timerProgress.style.strokeDasharray = circunferencia;
timerProgress.style.strokeDashoffset = 0;

function obterTempoConfigurado() {
    const horas = Number(inputHoras.value);
    const minutos = Number(inputMinutos.value);
    const segundos = Number(inputSegundos.value);

    if (
        inputHoras.value === "" ||
        inputMinutos.value === "" ||
        inputSegundos.value === "" ||
        !Number.isInteger(horas) ||
        !Number.isInteger(minutos) ||
        !Number.isInteger(segundos) ||
        horas < 0 ||
        horas > 99 ||
        minutos < 0 ||
        minutos > 59 ||
        segundos < 0 ||
        segundos > 59
    ) {
        return null;
    }

    const total = horas * 3600 + minutos * 60 + segundos;

    return total > 0 ? total : null;
}

function formatarTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;

    if (horas > 0) {
        return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
    }

    return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function atualizarCirculo() {
    const progresso = tempoTotal > 0
        ? tempoRestante / tempoTotal
        : 0;

    const deslocamento = circunferencia * (1 - progresso);

    timerProgress.style.strokeDashoffset = deslocamento;
}

function atualizarDisplay() {
    timerDisplay.textContent = formatarTempo(tempoRestante);
    atualizarCirculo();
}

function atualizarConfiguracao() {
    if (executando) {
        return;
    }

    const tempoConfigurado = obterTempoConfigurado();

    if (tempoConfigurado === null) {
        return;
    }

    tempoTotal = tempoConfigurado;
    tempoRestante = tempoConfigurado;

    atualizarDisplay();

    timerMessage.textContent = "Prepare-se para iniciar sua sessão.";
}

function finalizarTimer() {
    clearInterval(intervalo);

    intervalo = null;
    executando = false;
    instanteFinal = null;
    tempoRestante = 0;

    atualizarDisplay();

    botaoIniciar.textContent = "Iniciar";
    timerMessage.textContent = "Sessão concluída! Parabéns pela concentração.";
}

function atualizarTimer() {
    tempoRestante = Math.max(
        0,
        Math.ceil((instanteFinal - Date.now()) / 1000)
    );

    atualizarDisplay();

    if (tempoRestante <= 0) {
        finalizarTimer();
    }
}

function iniciarTimer() {
    if (executando) {
        pausarTimer();
        return;
    }

    if (intervalo === null) {
        const tempoConfigurado = obterTempoConfigurado();

        if (tempoConfigurado === null) {
            timerMessage.textContent = "Informe um tempo válido maior que zero.";
            return;
        }

        tempoTotal = tempoConfigurado;
        tempoRestante = tempoConfigurado;
    }

    instanteFinal = Date.now() + tempoRestante * 1000;
    executando = true;

    botaoIniciar.textContent = "Pausar";
    timerMessage.textContent = "Sessão em andamento. Mantenha o foco!";

    atualizarTimer();

    if (tempoRestante > 0) {
        intervalo = setInterval(atualizarTimer, 250);
    }
}

function pausarTimer() {
    if (!executando) {
        return;
    }

    atualizarTimer();

    if (!executando) {
        return;
    }

    clearInterval(intervalo);

    intervalo = null;
    executando = false;
    instanteFinal = null;

    botaoIniciar.textContent = "Continuar";
    timerMessage.textContent = "Sessão pausada.";
}

function resetarTimer() {
    clearInterval(intervalo);

    intervalo = null;
    instanteFinal = null;
    executando = false;

    const tempoConfigurado = obterTempoConfigurado();

    if (tempoConfigurado === null) {
        tempoTotal = 0;
        tempoRestante = 0;
        timerDisplay.textContent = "00:00";
        timerProgress.style.strokeDashoffset = circunferencia;
        botaoIniciar.textContent = "Iniciar";
        timerMessage.textContent = "Informe um tempo válido maior que zero.";
        return;
    }

    tempoTotal = tempoConfigurado;
    tempoRestante = tempoConfigurado;

    botaoIniciar.textContent = "Iniciar";
    timerMessage.textContent = "Cronômetro reiniciado.";

    atualizarDisplay();
}

botaoIniciar.addEventListener("click", iniciarTimer);
botaoResetar.addEventListener("click", resetarTimer);

inputHoras.addEventListener("change", atualizarConfiguracao);
inputMinutos.addEventListener("change", atualizarConfiguracao);
inputSegundos.addEventListener("change", atualizarConfiguracao);

atualizarDisplay();
