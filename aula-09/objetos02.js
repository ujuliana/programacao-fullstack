const pessoas = [
    {
        nome: "Juliana",
        idade: 20,
        sexo: "Fem",
    },

    {
        nome: "Nathalia",
        idade: 32,
        sexo: "Fem",
    },

    {
        nome: "Emanuel",
        idade: 65,
        sexo: "Masc"
    },
];

  const pessoasFiltradas = pessoas
   .filter((elemento) => elemento.idade < 60);

//   console.log(pessoasFiltradas);

// pessoasFiltradas.forEach((elemento) => console.log( elemento.nome));

pessoas.push( {
    nome: "João",
    idade: 30,
    sexo: "Masc",
})
console.log(pessoas);