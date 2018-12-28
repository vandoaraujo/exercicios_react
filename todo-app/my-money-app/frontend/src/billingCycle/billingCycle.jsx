import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tab'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update, remove } from './billingCycleActions'

import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        //estou selecionando sempre a aba tabList para ser exibida
        this.props.selectTab('tabList')
        //Estou exibindo apenas as duas tabs iniciais (list e create).
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
        <div>
            <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
            <Content>
            <Tabs>
                <TabsHeader>
                    <TabHeader label='Listar' icon='bars' target='tabList' />
                    <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                    <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                    <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                </TabsHeader>
                <TabsContent>
                    <TabContent id='tabList'>
                        <List />
                    </TabContent>
                    <TabContent id='tabCreate'>
                        <Form onSubmit={this.props.create}
                            submitLabel='Incluir' submitClass='primary'/>
                    </TabContent>
                    <TabContent id='tabUpdate'>
                        <Form onSubmit={this.props.update}
                            submitLabel='Alterar' submitClass='info' />
                    </TabContent>
                    <TabContent id='tabDelete'>
                        <Form onSubmit={this.props.remove} readOnly={true}
                            submitLabel='Excluir' submitClass='danger' />
                    </TabContent>
                </TabsContent>
            </Tabs>
            </Content>
        </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)