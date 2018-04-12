import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

/**
 * Esses imports são do sistema de modulos do ECMA Script 2015,
 * que são o import e o export que é um sistema similar ao que tem
 * no NODE, mas o node USa o require que é o padrão do COMMON.JS
 * e esse padrão é do ECMA SCRIPT 2015
 * O Webpack roda nos dois...poderíamos fazer acima um require
 */

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
       <Menu />
       <Routes />
    </div>
)