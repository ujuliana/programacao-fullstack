// 7.Usando o filter, crie uma função que itera sobre um array e retorna um novo array com apenas números pares

const numeros = [5, 2, 9, 4, 8];

function arrayNovo() {
  const numerosFiltrados = numeros.filter((numeros) => numeros % 2 === 0);
  console.log(numerosFiltrados)
}

arrayNovo();
