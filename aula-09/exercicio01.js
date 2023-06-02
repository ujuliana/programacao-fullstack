// 1.Crie um objeto com pelo menos três propriedades e um método e imprima o valor de uma das propriedades no console.

 const carro = {
     marca: "FIAT",
     modelo: "Uno",
     cor: "Vinho",
    placa: 667890,
    acelerar: () => {
        return `O carro Fiat Uno está acelerando muito na estrada`;
     }

 }
 
// console.log(carro.acelerar());

// 2.Adicione uma nova propriedade a um objeto e imprima o valor dessa propriedade no console.

carro.velocidade = "100km";

// console.log(carro);


// 3.Remova uma propriedade de um objeto e imprima o valor dessa propriedade no console (verifique se ela ainda existe).

const valorAcelerar = carro.acelerar();
delete
carro.acelerar;                          //valor acelerar dentro de uma const (armazenada)
//console.log(valorAcelerar);

//console.log(carro);

// 4.Verifique se um objeto tem uma determinada propriedade e imprima o resultado no console.

if ("cor" in carro){
   //console.log("A propriedade existe no objeto");
} else {
   //console.log("A proriedade não existe no objeto");
}

// 5.Percorra as propriedades de um objeto usando um laço e imprima cada uma delas no console.

for (const propriedade in carro){
    console.log(propriedade + ":" + carro[propriedade]);
}
