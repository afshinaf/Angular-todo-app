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

  updateTodo = (index: number, updatedTodo: Todo) => this.todos[index] = updatedTodo;

}
