let nota1 = 7;
let nota2 = 5;
let nota3 = 9;
let nota4 = 4;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    console.log("aprovado");
} else if (media < 7 && media >= 5) {
    console.log("recuperação");
} else {
    console.log("reprovado");
}