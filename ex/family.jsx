import React from 'react'
import Member from './member'

export default props => (
    <div>
        Família
        { React.cloneElement(props.children, {...props}) }
    </div>    
)