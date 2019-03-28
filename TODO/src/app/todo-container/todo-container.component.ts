import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../model/Todo";
import TodoService from "../TodoServices/TodoService";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList: Array<Todo> = [];
  todo: Todo;

  addEvent(event) {

    //this.todoList.push(new Todo(event, false));

    this.todoService.addTodos(new Todo(event, false))
      .then((result) => {
          console.log("service add =" + result);
        }
      )

      .finally(() => {
        this.todoService.getTodos();
      });


    console.log("container event" + event);
  }


  resetEvent(event) {

    this.todoService.delTodos()
      .then((result) => {
          this.todoList = result;
          console.log("service del =" + result);
        }
      )


    console.log("reset event" + event);
  }

  constructor(private todoService: TodoService) {
  }


  ngOnInit() {


    this.todoService.getTodos()
      .then((result) => {
          console.log(result);
          this.todoList = result;
        }
      );
  }

}
