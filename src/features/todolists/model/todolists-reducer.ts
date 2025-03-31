import type {FilterValues, Todolist} from '../../../app/App.tsx'
import {createAction, createReducer, nanoid} from "@reduxjs/toolkit";


export const deleteTodolistAC = createAction<{ id: string }>('todos/deleteTodolist')
export const createTodolistAC = createAction('todos/createTodolist', (title: string) => {
    return {payload: {title, id: nanoid()}}
})
export const changeTodolistTitleAC = createAction<{ id: string, title: string }>('todos/changeTitle')
export const changeTodolistFilterAC = createAction<{ id: string, filter: FilterValues }>('todos/changeTodolistFilter')

const initialState: Todolist[] = []

export const todolistsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(deleteTodolistAC, (state, action) => {
            const {id} = action.payload
            const index = state.findIndex(item => item.id === id)
            if (index !== -1) {
                state.splice(index, 1)
            }
        })
        .addCase(createTodolistAC, (state, action) => {
            state.push({...action.payload, filter: 'all'})
        })
        .addCase(changeTodolistTitleAC, (state, action) => {
            const {id, title} = action.payload
            const todo = state.find((t) => t.id === id)
            if (todo) {
                todo.title = title
            }
        })
        .addCase(changeTodolistFilterAC, (state, action) => {
            const {id, filter} = action.payload
            const todo = state.find((t) => t.id === id)
            if (todo) {
                todo.filter = filter
            }
        })
})






