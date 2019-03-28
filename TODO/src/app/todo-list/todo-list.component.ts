import {Component, Input, OnInit} from '@angular/core';
import { Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 @Input()
 todos: Array<Todo> = [];


 nb:number;


  getList() {

    return this.todos.length > 0 ? "il y en a "  + this.todos.length : "Vous n’avez aucun todo";

  }

  constructor() { }

  ngOnInit() {

    this.nb = this.todos.length;
  }

}
