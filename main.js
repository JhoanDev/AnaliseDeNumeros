let vetor = []
var qnt = 0

function enviar() {
    var num = Number(document.getElementById('number').value)
    var table = document.getElementById('selected')
    if (num >= -10000 && num <= 10000) {
        vetor.push(num)
        qnt++
        let item = document.createElement('option')
        item.text = `O valor ${num} foi adicionado!`
        table.appendChild(item)
    }else{
        window.alert('[ERRO] Insira um valor valído!')
    }
}
function analisar() {
    var res = document.getElementById('res')
    if (vetor.length == 0) {
        res.innerHTML = 'Nenhum valor cadastrado, por favor insira valores.'
    }else{
    var maior = 1
    var soma = 0
    var menor = 10000
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] > maior ) {
                maior = vetor[i]
            } 
            if (vetor[i] < menor){
                menor = vetor [i]
            }
            soma += vetor[i]
        }
    var media = soma/qnt
    res.innerHTML = `temos <b>${qnt}</b> números cadastrados <br>O maior valor informado foi: <b>${maior}</b> <br>O menor valor informado foi: <b>${menor}</b> <br>A soma de todos os valores é: <b>${soma}</b> <br> A média de todos os valores é: <b>${media}</b>`
    }
}