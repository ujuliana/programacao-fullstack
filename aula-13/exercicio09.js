// 9.Usando objetos, crie uma função que calcula a área de um retângulo com base na sua largura e altura

const areaRetangulo = {
    largura: 5,
    altura: 10,
}

function Calculo(){
    let total = areaRetangulo.altura*areaRetangulo.largura;
    return total;
}

console.log(Calculo());