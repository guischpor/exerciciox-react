import React from 'react'

const aprovados = ['Paula', 'Raissa', 'Guilherme', 'Julia', 'Pedro']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}