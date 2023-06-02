// 2.Crie uma função chamada exibirDiaDaSemana que recebe um número de 1 a 7 como argumento e retorna o nome do dia da semana correspondente. Utilize a estrutura switch para realizar essa operação. Se o número fornecido não estiver dentro do intervalo válido, a função deve retornar a string "Número inválido".

function exibirDiaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
      break;
    case 2:
      return "Segunda";
      break;
    case 3:
      return "Terça";
      break;
    case 4:
      return "Quarta";
      break;
    case 5:
      return "Quinta";
      break;
    case 6:
      return "Sexta";
      break;
    case 7:
      return "Sábado";
      break;
    default:
      return "Número inválido";
  }
}

console.log(exibirDiaDaSemana(5))
