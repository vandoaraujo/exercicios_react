import React, { Component } from 'react'
/**
 * Poderia também escrever React.Component
 * Pra acessar o props usamos o (this)
 */
export default class ClassComponent extends Component{
    render(){
        return (
            <h1>{this.props.value}</h1>
        )
    }
}