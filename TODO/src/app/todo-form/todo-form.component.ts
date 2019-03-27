import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = '';

  @Output()
  newTodo = new EventEmitter<string>();

  constructor() {
  }


  handleChange(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  addClick() {

    this.newTodo.emit(this.title);
    console.log(this.title);
  }

  resetClick() {
    this.title ='';
  }

  ngOnInit() {
  }

}
