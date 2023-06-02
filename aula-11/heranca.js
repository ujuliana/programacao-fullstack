class Pai {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Olá, meu nome ${this.nome}`);
    }
}

// definindo classe filho
class Filho extends Pai {
    constructor (nome,idade) {
        super(nome);
        this.idade = idade;
    };

    
}