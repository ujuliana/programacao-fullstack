// const data = new Date();

// const meses = [
//     'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
// ];

// const diaDaSemana = [
//     'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
// ];

// const hoje = new Date();
// const diaSemana = diaDaSemana[hoje.getDay()];
// const diaMes = hoje.getDate();
// const mes = meses [hoje.getMonth()];
// const ano = hoje.getFullYear();

// console.log(`Hoje é ${diaSemana}, ${diaMes} de ${mes} de ${ano}.`);

const hoje = new Date();

const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dataExtenso = hoje.toLocaleDateString('pt-BR', opcoes);

console.log("Hoje é " + dataExtenso);