// 8.Usando o reduce, crie uma função que itera sobre um array e retorna a soma dos seus elementos

const num = [2,6,8,4,2];

function i(){
    const soma = num.reduce((valor1, valor2) => valor1 + valor2);
    console.log(soma);

}

i();

