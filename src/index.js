import React from 'react'
import ReactDOM from 'react-dom';
//import PrimeiroComponente from './components/PrimeiroComponente'
import {CompA, CompB} from './components/DoisComponentes'


const elemento = document.getElementById('root')
ReactDOM.render(
       <div>
           {/*<PrimeiroComponente  valor="Bom Dia" />*/}
        <CompA valor="Olá Maicon"/>
        <CompB valor="Olá Cara blz"/>

       </div>

    ,elemento)






//const jsx = <h1>Olá React!</h1>
//ReactDOM.render(jsx, elemento)