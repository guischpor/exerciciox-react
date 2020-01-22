import React from 'react'
import ReactDOM from 'react-dom';
//import PrimeiroComponente from './components/PrimeiroComponente'
//import {CompA, CompB} from './components/DoisComponentes'
//import CalcSoma from './components/CalcSoma'
//import MultiElementos from './components/MultiElementos'
import FamiliaPortela from './components/FamiliaPortela'


const elemento = document.getElementById('root')
ReactDOM.render(
       <div>
           {/* <CompA valor="Olá Maicon"/>
           <CompB valor="Olá Cara blz"/> */}
           {/*<PrimeiroComponente  valor="Bom Dia" />*/}
           {/* <CalcSoma n1='4' n2='4' />     */}
           {/* <MultiElementos /> */}
           <FamiliaPortela />

       </div>

    ,elemento)






//const jsx = <h1>Olá React!</h1>
//ReactDOM.render(jsx, elemento)