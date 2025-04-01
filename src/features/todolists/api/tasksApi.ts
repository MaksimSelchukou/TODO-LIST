import { instance } from "@/common/instance/instance.ts"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"
import { BaseResponse } from "@/common/types"
import type { ChangeEvent } from "react"
import { TaskStatus } from "@/common/enums/enums.ts"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  createTask(todolistId: string, titleTask: string) {
    return instance.post<BaseResponse<{ item: DomainTask }>>(`/todo-lists/${todolistId}/tasks`, { title: titleTask })
  },
  deleteTask(todoListId: string, taskId: string) {
    return instance.delete(`/todo-lists/${todoListId}/tasks/${taskId}`)
  },
  changeTaskStatus(e: ChangeEvent<HTMLInputElement>, task: DomainTask) {
    const taskModel: UpdateTaskModel = {
      ...task,
      status: e.target.checked ? TaskStatus.Completed : TaskStatus.New,
    }
    return instance.put<
      BaseResponse<{
        item: DomainTask
      }>
    >(`/todo-lists/${task.todoListId}/tasks/${task.id}`, taskModel)
  },
  changeTaskTitle(title: string, task: DomainTask) {
    const taskModel: UpdateTaskModel = {
      ...task,
      title: title,
    }
    return instance.put<
      BaseResponse<{
        item: DomainTask
      }>
    >(`/todo-lists/${task.todoListId}/tasks/${task.id}`, taskModel)
  },
}
