import { Todo } from "../model/Todo";

export default class TodoApi {
  fetchTodo():Promise<Array<Todo>> {
    return new Promise((resolve)=> {
      setTimeout(()=> {
        resolve([
          new Todo('module JSP', false),
          new Todo('module Spring', true),
          new Todo('module Maven', false)
        ])
      }, 2000);
      
    });
  }
}
