import {Todolist} from "@/app/AppHttpRequests.tsx";

export type FieldError = {
    error: string
    field: string
}
export type BaseResponse<T = {}> = {
    data: T
    resultCode: number
    messages: string[]
    fieldsErrors: FieldError[]
}

export type CreateTodolistResponse = BaseResponse<{ item: Todolist }>
export type DeleteTodolistResponse = BaseResponse
export type UpdateTodolistTitleResponse = BaseResponse