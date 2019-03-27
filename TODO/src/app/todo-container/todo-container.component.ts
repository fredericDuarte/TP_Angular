import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../model/Todo";


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList: Array<Todo> = [];

  addEvent(event) {

   this.todoList.push( new Todo(event, false ));
    console.log( "container event"  + event);
  }

  constructor() { }


  ngOnInit() {

  }

}
