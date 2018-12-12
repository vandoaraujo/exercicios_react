import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        Família
        { childrenWithProps(props.children, props) }
        
    </div>    
)