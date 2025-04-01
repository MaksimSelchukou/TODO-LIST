import "./App.css"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import { Header } from "@/common/components/Header/Header.tsx"
import { selectTheme } from "./app-selectors"
import { getTheme } from "@/common/theme/theme.ts"
import { Main } from "@/app/Main.tsx"

export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}
export type Task = {
  id: string
  title: string
  isDone: boolean
}
export type FilterValues = "all" | "active" | "completed"
export type TasksState = Record<string, Task[]>

export const App = () => {
  const themeMode = useAppSelector(selectTheme)
  const theme = getTheme(themeMode)

  return (
    <ThemeProvider theme={theme}>
      <div className={"app"}>
        <CssBaseline />
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  )
}
