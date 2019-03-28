import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../model/Todo";
import  TodoService  from "../TodoServices/TodoService";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList: Array<Todo> = [];

  addEvent(event) {

    this.todoList.push(new Todo(event, false));
    console.log("container event" + event);
  }


  resetEvent(event) {

    this.todoList = [];
    console.log("reset event" + event);
  }

  constructor(private todoService : TodoService) {
  }


  ngOnInit() {


    this.todoService.getTodos()
      .then( (result) =>{
          console.log(result);
          this.todoList =  result;
        }


      );
  }

}
