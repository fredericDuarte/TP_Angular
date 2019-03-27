import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


   @Input()
   todo : Todo



  checkClick() {
    this.todo.isDone= !this.todo.isDone;

  }


  constructor() { }

  ngOnInit() {
  }

}
