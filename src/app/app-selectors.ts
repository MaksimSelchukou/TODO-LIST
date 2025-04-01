import { RootState } from "@/app/store.ts"
import { TasksState, Todolist } from "@/app/App.tsx"
import { ThemeMode } from "@/common/theme/theme.ts"

export const selectTodolists = (state: RootState): Todolist[] => state.todolists
export const selectTheme = (state: RootState): ThemeMode => state.app.themeMode
export const selectTasks = (state: RootState): TasksState => state.tasks
