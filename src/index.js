import React from 'react'
import ReactDOM from 'react-dom';
import PrimeiroComponente from './components/PrimeiroComponente'
import SegundoComponente from './components/SegundoComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
       <div>
           <PrimeiroComponente />
           <SegundoComponente />
       </div>

    ,elemento)






//const jsx = <h1>Olá React!</h1>
//ReactDOM.render(jsx, elemento)