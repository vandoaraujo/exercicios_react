import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// o formValueSelector é responsavel por pegar um determinado valor dentro do form.
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits }  = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                        <CreditList cols='12 6' list={credits} readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                    {this.props.submitLabel}
                </button>
                <button type='button' className='btn btn-default'
                    onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
//Nas linhas abaixo estamos usando o padrao decorator, primeiro decoro o componente billingCycleForm
//com o reduxForm, depois faço a associação com o actionCreators e faço a decoração novamente do componente
//com o connect e o dispatchToProps.

//a tag destroyUnmount é usada porque estamos usando o mesmo form para inclusao e alteração. 
//Necessitamos dela para manter o form integro. se nao usarmos teremos comportamentos indesejaveis
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount:false})(BillingCycleForm)
//essa é umam função do redux-form que recebe o id como parametro e retorna um selector.
const selector  = formValueSelector('billingCycleForm')
//a funcao selector recebe o state como propriedade e a string credits e retorna o array de creditos
//que será colocado dentro do state.
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
//o mapstatetoprops irá nulo, pois não temos ele e não precisamos
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)