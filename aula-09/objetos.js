const pessoa = {
    nome: "Juliana",
    sobrenome: "Almeida",
    idade: 20,
    andar: () => {
      return "Estou andando ...";
    },
}

console.log(pessoa["nome"]);             //PARA MOSTRAR APENAS UMA PROPRIEDADE ESPECÍFICA

// for (const item in pessoa){
//     console.log(item + ":" + pessoa[item]);       PARA MOSTRAR O OBJETO TODO
// }