import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = []
  local = localStorage.getItem('todos');

  constructor() {
    if (this.local) {
      this.todos = JSON.parse(localStorage.getItem('todos') || '');
    }else{
      console.log("local is empty");
    }
   }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo = (index: number) => {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  editTodo = (index: number) => {
    console.log("edit todo", index);
    let title = this.todos[index].text;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== ""){
      this.todos[index].text = result;
    }
    //todo: this function must be cleaner and better , its best that create a modal for edit todos
  }
}
