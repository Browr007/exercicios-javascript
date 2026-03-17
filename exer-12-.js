const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Tênis", preco: 299.00 },
    { nome: "Boné", preco: 35.00 },
    { nome: "Relógio", preco: 450.00 }, 
    { nome: "Meias", preco: 15.00 }
];

const maisCaro = produtos.reduce((acumulador, atual) => {
    return (atual.preco > acumulador.preco) ? atual : acumulador;
});

console.log(`O produto mais caro é o ${maisCaro.nome}, custando R$ ${maisCaro.preco}.`);