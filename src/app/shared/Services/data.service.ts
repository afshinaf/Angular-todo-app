import { Injectable } from '@angular/core';

import { Todo } from '../Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = []

  public showTodo: Todo[] = []
  local = localStorage.getItem('todos');

  constructor() {
    if (this.local) {
      this.todos = JSON.parse(localStorage.getItem('todos') || '');
      this.showTodo = this.todos;
    } else {
      console.log("local is empty");
    }
  }

  public sortTodo(array: Todo[]) {
    return array.sort((a:any, b: any) => {
      if(a.completed === true && b.completed === false) {
        return 1;
      }else if(a.completed === false && b.completed === true) {
        return -1;
      }else {
        return 0;
      }
    })
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo = (index: number) => {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  editTodo = (index: number) => {
    let title = this.todos[index].text;
    let result = prompt("Edit Task Title", title);
    if (result !== null && result !== "") {
      this.todos[index].text = result;
    }
    //todo: this function must be cleaner and better , its best that create a modal for edit todos
  }

  searchTodo = (todo: string) => {
    this.showTodo = this.todos.filter(item => item && item.text.search(todo) !== -1);
  }

  completedTodo = (index: number) => {
    this.todos[index].completed = true;
    let sortedTodo = this.sortTodo(this.todos);
    localStorage.setItem('todos', JSON.stringify(sortedTodo));
  }

  blockedTodo = (index: number) => {
    this.todos[index].blocked = true;
  }
}
