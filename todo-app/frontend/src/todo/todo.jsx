import React from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default props => (
    <div>
        <PageHeader name='app' small='R'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)
