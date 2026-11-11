
const formCalculadora = document.getElementById("formCalculadora");
const inputHoras = document.getElementById("mediaHoras");
const periodoComparacao = document.getElementById("periodoComparacao");

const resultado = document.getElementById("resultado");
const comparativo = document.getElementById("comparativo");

const formatador = new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 1
});

const formatarNumero = (valor) => formatador.format(valor);

const formatarTempo = (horas) => {
    const dias = horas / 24;

    if (horas >= 24) {
        return `${formatarNumero(horas)} horas (${formatarNumero(dias)} dias)`;
    }

    return `${formatarNumero(horas)} horas`;
};

const exibirValor = (id, valor) => {
    document.getElementById(id).textContent = valor;
};

let horasDiarias = 0;
let horasAno = 0;
let horasCincoAnos = 0;
let horasDezAnos = 0;

const calcularTempo = () => {

    horasDiarias = Number(inputHoras.value);

    if (
        inputHoras.value.trim() === "" ||
        !Number.isFinite(horasDiarias) ||
        horasDiarias < 0 ||
        horasDiarias > 24
    ) {
        inputHoras.setCustomValidity("Informe um valor entre 0 e 24 horas.");
        inputHoras.reportValidity();
        return false;
    }

    inputHoras.setCustomValidity("");

    const periodos = {
        dia: horasDiarias,
        semana: horasDiarias * 7,
        mes: horasDiarias * 30,
        ano: horasDiarias * 365,
        cincoAnos: horasDiarias * 365 * 5,
        dezAnos: horasDiarias * 365 * 10
    };

    horasAno = periodos.ano;
    horasCincoAnos = periodos.cincoAnos;
    horasDezAnos = periodos.dezAnos;

    exibirValor("tempoDia", formatarTempo(periodos.dia));
    exibirValor("tempoSemana", formatarTempo(periodos.semana));
    exibirValor("tempoMes", formatarTempo(periodos.mes));
    exibirValor("tempoAno", formatarTempo(periodos.ano));
    exibirValor("tempoCincoAnos", formatarTempo(periodos.cincoAnos));
    exibirValor("tempoDezAnos", formatarTempo(periodos.dezAnos));

    const porcentagemDia = (horasDiarias / 24) * 100;

    document.getElementById("barraTempo").style.width = `${porcentagemDia}%`;

    document.getElementById("barraTempo").setAttribute(
        "aria-valuenow",
        horasDiarias
    );

    exibirValor(
        "mensagemResultado",
        `Você dedica aproximadamente ${formatarTempo(periodos.ano)} às telas por ano. Isso representa ${formatarNumero(porcentagemDia)}% de todas as horas de um dia, considerando a mesma média diária ao longo do ano.`
    );

    resultado.classList.remove("d-none");
    comparativo.classList.remove("d-none");

    atualizarComparativo();

    return true;
};

const atualizarComparativo = () => {

    const periodo = Number(periodoComparacao.value);

    const horasDisponiveis = horasAno * periodo;

    exibirValor(
        "totalComparacao",
        formatarTempo(horasDisponiveis)
    );

    const quantidadeLivros = horasDisponiveis / 2.085;

    exibirValor(
        "livros",
        `${formatarNumero(quantidadeLivros)} livros`
    );

    const quantidadeHabilidades = horasDisponiveis / 20;

    exibirValor(
        "habilidades",
        `${formatarNumero(quantidadeHabilidades)} ciclos`
    );

    const categoriasFSI = [
        { categoria: "I", horas: 600 },
        { categoria: "II", horas: 900 },
        { categoria: "III", horas: 1100 },
        { categoria: "IV", horas: 2200 }
    ];

    const resultadoIdiomas = categoriasFSI.map((item) => {
        const equivalencia = horasDisponiveis / item.horas;

        return `Categoria ${item.categoria}: ${formatarNumero(equivalencia)}x`;
    });

    exibirValor(
        "idiomas",
        resultadoIdiomas.join(" | ")
    );

    const sessoesTreino = horasDisponiveis * 2;

    exibirValor(
        "treinos",
        `${formatarNumero(sessoesTreino)} sessões`
    );

    const semanasAtividade = horasDisponiveis / 2.5;

    const elementoTreinos = document.getElementById("treinos");

    elementoTreinos.setAttribute(
        "title",
        `${formatarNumero(semanasAtividade)} equivalências de 150 minutos semanais de atividade aeróbica`
    );

    exibirValor(
        "cursos",
        `${formatarNumero(horasDisponiveis / 40)} módulos`
    );

    const ciclosHabitos = horasDisponiveis / 7.5;

    exibirValor(
        "habitos",
        `${formatarNumero(ciclosHabitos)} ciclos`
    );

    exibirValor(
        "reflexaoComparacao",
        `Em ${periodo} ${periodo === 1 ? "ano" : "anos"}, você acumularia ${formatarTempo(horasDisponiveis)}. Esse período poderia ser direcionado a leitura, prática de habilidades, estudos, atividade física e construção de hábitos. Os números representam equivalências de tempo, não resultados garantidos.`
    );
};

formCalculadora.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (calcularTempo()) {
        resultado.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

periodoComparacao.addEventListener("change", () => {
    atualizarComparativo();
});
