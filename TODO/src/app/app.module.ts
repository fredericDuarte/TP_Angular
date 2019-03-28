import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

import  TodoService  from "./TodoServices/TodoService";
import  TodoApi  from "./TodoServices/TodoApi";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoContainerComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoService,
    TodoApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
