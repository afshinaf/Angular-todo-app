import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = []

  constructor() {
    // this.todos = JSON.parse(localStorage.getItem('todos') || '');
   }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
    window.localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  updateTodo = (index: number, updatedTodo: Todo) => this.todos[index] = updatedTodo;
  deleteTodo = (index: number) => this.todos.splice(index, 1);
}
