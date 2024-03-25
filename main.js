const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="/images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="/images/reprovado.png" alt="Emoji triste">'
const atividades = []
const notas = []
let linhas = ''
const spanAprovado = '<span class="resultado Aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado Reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Nota mínima para aprovação"))


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    calculaMedia()
    atualizaMedia()
})
function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNota = document.getElementById('nota')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    }else{
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNota.value))

        let linha =  `<tr>`
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNota.value = ''
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
function atualizaMedia(){
    const media = calculaMedia()

    document.getElementById('media-valor').innerHTML = media
    document.getElementById('media-resultado').innerHTML = media >=notaMinima ?  spanAprovado: spanReprovado
}
function calculaMedia(){
    let somaDasNotas = 0

    for(let i =0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length
}
