// 4.Usando o for in em objetos, crie uma função que imprime as propriedades de um objeto.

const Pessoa = {
  nome: "Juliana",
  idade: 20,
  sexo: "Feminino",
};

function imprimirPessoa(k) {
  for (let resultado in k) 
  console.log(k[resultado]);
}

imprimirPessoa(Pessoa);
