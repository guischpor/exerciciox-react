import React from 'react'
import { ListaAlunos } from '../utils/utils'

export default props =>
    <div>
        <h1>Turma 1</h1>

        {ListaAlunos(props)}
    </div>