import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
       super(props)
       this.state = { description: '', list: [] }
       this.handleChange = this.handleChange.bind(this)
       this.handleAdd = this.handleAdd.bind(this) 
       this.handleRemove = this.handleRemove.bind(this)
       this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
       this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
       this.handleSearch = this.handleSearch.bind(this)

       this.refresh()
    }

    handleAdd(){
        console.log(this.state.description)
        const description = this.state.description
        axios.post(URL, { description } )
            .then(resp => this.refresh())
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list:resp.data}))
    }

    handleChange(e) {
        this.setState({description: e.target.value })
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => this.refresh(this.state.description))
    } 

    handleSearch(){
        this.refresh(this.state.description)
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                 handleChange={this.handleChange}
                 handleSearch={this.handleSearch}
                 handleAdd={this.handleAdd} />
                 <TodoList list={this.state.list}
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}