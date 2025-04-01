import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { tasksReducer } from "@/features/todolists/model/tasks-reducer.ts"
import { todolistsReducer } from "@/features/todolists/model/todolists-reducer.ts"
import { appReducer } from "./app-reducer.ts"

const rootReducer = combineReducers({
  app: appReducer,
  tasks: tasksReducer,
  todolists: todolistsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store
