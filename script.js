let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []


function isnumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista (n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumero(num.value) && !inlista(num.value, valores) ) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot_valores = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma = soma + valores[pos]
        }

        let média = soma / valores.length

        res.innerHTML = ""

        res.innerHTML += `<p>O total de valores adicionados foi de : ${tot_valores}</p>`
        res.innerHTML += `<p>O maior valor adicionado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor valor adicionado foi o de ${menor}</p>`
        res.innerHTML += `<p>A soma entre os valores é : ${soma} </p>`
        res.innerHTML += `<p>A média entre os valores digitados é de ${média}</p>`
    }
}

