import React, { Component} from 'react'

class Field extends Component{
    constructor(props){
        super(props)
        this.state = {value : props.initialValue}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} value={this.state.value}  />
            </div>
        )
 
    }
}
/**
 * O onChange é o que o React chama de componentes controlados...
 * No React o estado que é controlado pelo JS é absoluto,
 * esse estado qeu comanda o que vc está vewndo na tela,
 * é a partir do JS, do estado que vc atualiza a visualização
 * do componente na pagina. É do codigo JS para a DOM...
 */
export default Field