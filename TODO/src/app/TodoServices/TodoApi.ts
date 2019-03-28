import {Todo} from "../model/Todo";

export default class TodoApi {

  // todoList: Array<Todo> = [];
  todoList: Array<Todo> = [new Todo('module JSP', false), new Todo('module Angular', false)];

  fetchTodo(): Promise<Array<Todo>> {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todoList)
      }, 1000);

    });
  }

  fetchAddTodo(todo: Todo) {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todoList.push(todo)
        )
      }, 1000);

    });
  }


  fetchDelTodo(): Promise<Array<Todo>> {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todoList = [])
      }, 2000);

    });
  }


}




