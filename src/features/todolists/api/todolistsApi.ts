import {instance} from "@/common/instance/instance.ts";
import {Todolist} from "@/features/todolists/api/todolistsApi.types.ts";
import {CreateTodolistResponse, DeleteTodolistResponse, UpdateTodolistTitleResponse} from "@/common/types";

export const todolistsApi = {
    getTodolists() {
        return instance.get<Todolist[]>('/todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<CreateTodolistResponse>('/todo-lists', {title})
    },
    deleteTodolist(todoID: string) {
        return instance.delete<DeleteTodolistResponse>(`/todo-lists/${todoID}`)
    },
    changeTodolistTitle(obj: { title: string, id: string }) {
        return instance.put<UpdateTodolistTitleResponse>(`/todo-lists/${obj.id}`, {title: obj.title})
    }
}