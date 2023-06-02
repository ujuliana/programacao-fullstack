class Veiculo {
    constructor(nome) {
        this.nome = nome;
    }

    locomover() {
       console.log(`Está se locomovendo`);
    }
}

class Carro extends Veiculo {
    constructor(nome, modelo, marca, velocidade, cor){
        super(nome);
        this.modelo = modelo;
        this.marca = marca;
        this.velocidade = velocidade;
        this.cor = cor;
    } 
}

const carro = new Carro ( 'Carro', 500, 'FIAT', '150km', 'BRANCO');

carro.locomover();