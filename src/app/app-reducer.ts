import { createAction, createReducer } from "@reduxjs/toolkit"
import { ThemeMode } from "./App"

const initialState = {
  themeMode: "light" as ThemeMode,
}

export const changeThemeAppAC = createAction<{ themeMode: ThemeMode }>("app/changeThemeApp")

export const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeThemeAppAC, (state, action) => {
    state.themeMode = action.payload.themeMode
  })
})
