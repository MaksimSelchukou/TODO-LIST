import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import type { FilterValues, Todolist } from "@/app/App.tsx"
import { changeTodolistFilterAC } from "@/features/todolists/model/todolists-reducer.ts"
import { useAppDispatch } from "@/common/hooks/useAppDispatch.ts"
import { containerSx } from "@/common/styles/container.styles.ts"

type Props = {
  todolist: Todolist
}

export const FilterButtons = ({ todolist }: Props) => {
  const dispatch = useAppDispatch()
  const { id, filter } = todolist
  const changeFilterTodolist = (filter: FilterValues) => {
    dispatch(changeTodolistFilterAC({ id, filter }))
  }
  return (
    <Box sx={containerSx}>
      <Button variant={filter === "all" ? "outlined" : "text"} color={"inherit"} onClick={() => changeFilterTodolist("all")}>
        All
      </Button>
      <Button variant={filter === "active" ? "outlined" : "text"} color={"primary"} onClick={() => changeFilterTodolist("active")}>
        Active
      </Button>
      <Button variant={filter === "completed" ? "outlined" : "text"} color={"secondary"} onClick={() => changeFilterTodolist("completed")}>
        Completed
      </Button>
    </Box>
  )
}
