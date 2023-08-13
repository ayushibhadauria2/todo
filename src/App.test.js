import React from 'react';
import {render as rtlRender, screen} from '@testing-library/react';
import store from './store';
import {Provider} from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import { addTodo } from './actions';
import { MdTask } from 'react-icons/md';


const render = component => rtlRender(
    <Provider store = {store}>
        {component}
    </Provider>
)

const task = "learn next js"

describe('AddTodo', () => {
    test('add button ', () =>{
        render(<AddTodo />)
        expect(screen.getByText('ADD')).toBeInTheDocument()
    })
})

describe('Add a Todo', () => {
    test('should add a todo', () =>{
        const todo = task
        const expectedaction = {
            type: 'ADD_TODO',
            payload: {
                "task": "learn next js"
            },
        }
        expect(addTodo(todo)).toEqual(expectedaction)
    })

})


