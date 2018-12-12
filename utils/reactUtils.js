import React from 'react'

/**
 * O map é uma function JS que pega o array de cada elemento
 * e transforma ele num child, onde esse child é transformado num cloneElement
 * recebendo ele próprio e o a propagação do spread ...props que vem do pai
 * @param {*} children 
 * @param {*} props 
 */
function childrenWithProps(children, props){
   return React.Children.map(props.children,
    child => React.cloneElement(child, {...props})) ;
 }

 export { childrenWithProps }