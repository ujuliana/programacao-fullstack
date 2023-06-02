function Carro(cor, modelo, velocidade){
    this.marca = marca;
    this.cor = cor;
    this.modelo = modelo;
    this.velocidade = velocidade;
    this.acelerar = () => {
        return `O carro, ${this.marca}, com o modelo ${this.marca} está acelerando`;
    }
}

const carro1 = new Carro("FIAT", "Branco", "500", "200km");
const carro2 = new Carro("Porsche", "Preto", "Porsche 911Turbo", "350km");
const carro3 = new Carro("FERRARI", "Vermelho", "F450", "450km");
const carro4 = new Carro ("Chevrolet", "Amarelo", "Opala", "300km");


console.log(carro1.acelerar());