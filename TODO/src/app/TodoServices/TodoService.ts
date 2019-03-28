import { Todo } from "../model/Todo";
import TodoApi  from "./TodoApi";
import {Injectable} from '@angular/core';

@Injectable()
export default class TodoService {

constructor(private todoApi: TodoApi) {}

  getTodos(): Promise<Array<Todo>> {

   return this.todoApi.fetchTodo();
  }

  addTodos(todo:Todo) {

    return this.todoApi.fetchAddTodo(todo);
  }

  delTodos(): Promise<Array<Todo>> {

    return this.todoApi.fetchDelTodo();
  } 

}
