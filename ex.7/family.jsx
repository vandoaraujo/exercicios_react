import React from 'react'
import Member from './member'

export default props => (
    <div>
        Família
        { React.Children.map(props.children,
            child => React.cloneElement(child, {...props})) }
    </div>    
)