function calcularMedia(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    return media;
}

// Testando:
console.log(calcularMedia(7, 8, 9)); // Saída: 8