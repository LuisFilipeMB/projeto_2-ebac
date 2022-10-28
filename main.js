const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji de festa" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji de decepição" />';

let linhas = '';

function adicionandoLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabel() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionandoLinha();
    atualizaTabel();
})

