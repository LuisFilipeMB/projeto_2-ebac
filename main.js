const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji de festa" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji de decepição" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinina = parseFloat(prompt('digite a nota minima:'));

let linhas = '';

function adicionandoLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinina ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function calculaMediafinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}

function atualizaMédiaFinal(){
    const mediaFinal = calculaMediafinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinina ? spanAprovado : spanReprovado;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionandoLinha();
    atualizaTabela();
    atualizaMédiaFinal();
})


