import type { TasksState } from "../../../app/App.tsx"
import { createTodolistAC, deleteTodolistAC } from "./todolists-reducer.ts"
import { createAction, createReducer, nanoid } from "@reduxjs/toolkit"

export const deleteTaskAC = createAction<{ todolistId: string; taskId: string }>("tasks/deleteTask")
export const createTaskAC = createAction<{ todolistId: string; title: string }>("tasks/createTask")
export const changeTaskStatusAC = createAction<{
  todolistId: string
  taskId: string
  isDone: boolean
}>("tasks/changeTaskStatus")
export const changeTaskTitleAC = createAction<{
  todolistId: string
  taskId: string
  title: string
}>("tasks/changeTaskTitle")

const initialState: TasksState = {}

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deleteTodolistAC, (state, action) => {
      delete state[action.payload.id]
    })
    .addCase(createTodolistAC, (state, action) => {
      state[action.payload.id] = []
    })
    .addCase(deleteTaskAC, (state, action) => {
      const { todolistId, taskId } = action.payload
      const taskInd = state[todolistId].findIndex((t) => t.id === taskId)
      if (taskInd !== -1) {
        state[todolistId].splice(taskInd, 1)
      }
    })
    .addCase(createTaskAC, (state, action) => {
      const { todolistId, title } = action.payload
      state[todolistId].unshift({ id: nanoid(), title, isDone: false })
    })
    .addCase(changeTaskStatusAC, (state, action) => {
      const { todolistId, taskId, isDone } = action.payload
      const findedTask = state[todolistId].find((t) => t.id === taskId)
      if (findedTask !== undefined) {
        findedTask.isDone = isDone
      }
    })
    .addCase(changeTaskTitleAC, (state, action) => {
      const { todolistId, taskId, title } = action.payload
      const findedTask = state[todolistId].find((t) => t.id === taskId)
      if (findedTask !== undefined) {
        findedTask.title = title
      }
    })
})
