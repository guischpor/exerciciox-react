import React, {Component} from 'react'

export default class Contador extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state.numero = 0
    // }
   
    state = {
        numero: this.props.numeroInicial
    }

    //funções separadas
    maisUm = () => {
        this.alterarNumero(+1)
        // this.setState({
        //     numero: this.state.numero + 1
        // })
    }

    menosUm = () => {
        this.alterarNumero(-1)
        // this.setState({
        //     numero: this.state.numero - 1
        // })
    }

    //exemplo de funcao
    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }


    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.menosUm}>-</button>
                <button onClick={this.maisUm}>+</button>

                <button onClick={() => this.alterarNumero(-10)}>- 10</button>
                <button onClick={() => this.alterarNumero(10)}>+ 10</button>
                
            </div>
        )
    }
}




//Solução 01 - Funcao Contructor Bind
 // constructor(props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

//Solução 02 - Funcao Arrow (OnClick)
// <button onClick={() => this.maisUm()}>Inc</button>

//Solução 03 - Funcao com Bind e This
//<button onClick={this.maisUm.bind(this)}>Inc</button>

//Solução 04 - Funcao Arrow
// maisUm = () => {
//     //this.props.numero++
//     console.log(this)
  
// }