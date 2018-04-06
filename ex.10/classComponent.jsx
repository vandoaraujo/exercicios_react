import React, { Component } from 'react'
/**
 * Poderia também escrever React.Component
 * Pra acessar o props usamos o (this)
 */
export default class ClassComponent extends Component{

constructor(props){
    super(props) // isso é necessário no REACT, sem o super dá erro
    this.state = { value: props.initialValue } // this.state é uma variavel padrão que vem do Component.
    //atribuimos o valor de props.initialValue que vem READONLY(Todo valor é passado como READONLY para
    //os componentes. A variavel value recebe esse valor e atualizamos o this.state)

}

sum(delta){
    this.setState( { value: this.state.value + delta } )
    //Fazemos assim porque o estado deve ser evoluído e não modificado diretamente.
    //Fazendo desse jeito criamos uma especie de historico da evolução do valor...
} 
/**
 * usada uma funcao arrow, pois
   se fizermos direto this.sum(1), o retorno daria undefined e ligariamos esse
   undefined ao evento onclick, então queremos passar uma função para o onclick
   e não o retorno dessa funcao. Então passamos a funcao arrow e dentro dela passamos a função sum
 */
render(){
    return(
        <div>
           <h1>{this.props.label}</h1>
           <h2>{this.state.value}</h2>
           <button onClick={() => this.sum(-1)}> Dec </button> 
           <button onClick={() => this.sum(1)}> Inc </button>
        </div>    
    )
}

   /** render(){
        return (
            <h1>{this.props.value}</h1>
        )
    } **/
}