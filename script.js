function realizarSorteios() {
    const todosNumerosSorteados = [];
    
    for (let i = 0; i < 5; i++) {
        const numerosSorteados = sortearSemRepeticao(todosNumerosSorteados);
        todosNumerosSorteados.push(...numerosSorteados);
        exibirResultado(numerosSorteados, i + 1);
    }
}

function sortearSemRepeticao(excluirNumeros) {
    const numerosSorteados = [];
    while (numerosSorteados.length < 15) {
        const numero = Math.floor(Math.random() * 25) + 1;
        if (!numerosSorteados.includes(numero) && !excluirNumeros.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }
    return numerosSorteados;
}

function exibirResultado(numerosSorteados, sorteioNumero) {
    const resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML += `<p>Sorteio ${sorteioNumero}: ${numerosSorteados.join(', ')}</p>`;
}
