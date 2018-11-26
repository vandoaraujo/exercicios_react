import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    // exemplo pedia o metodo componentwillmount.
    // chamamos o ActionCreator de forma manual.
    componentDidMount(){
        this.props.search()
    }

    keyHandler(e) {
        //extraio esses tres atributos de this.props
        const { add, search, description } = this.props

        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        } else if(e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render(){
        const { add, search, description }  = this.props
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        value={this.props.description}
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        placeholder='Adicione uma tarefa'>
                    </input>
                </Grid>    
                
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={ () => add(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={ () => search()}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}></IconButton>        
                </Grid>
            </div>
        )
    }
}

//obtem dos reducers o valor de description
const mapStateToProps = state => ({description : state.todo.description})
//esse cara faz a ligacao de quem realmente dispara a ação com o todoActions.
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)