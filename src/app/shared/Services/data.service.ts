import { Injectable } from '@angular/core';

import { Todo } from '../Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public todos: Todo[] = []
  public form:any = {title: '', id: null};
  public editForm : boolean = false;
  public showTodo: Todo[] = []
  public local = localStorage.getItem('todos');

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
      if(a.status === 'completed' && b.status !== 'completed') {
        return 1;
      }else if(a.status !== 'completed' && b.status === 'completed') {
        return -1;
      }else {
        return 0;
      }
    })
  }

  public addTodo(param: Todo, id:any) {
    if (id){
      this.todos.forEach((item) =>{
        if (id === item.id) {
          item.text = param.text;
        }
      });
    }else {
      this.todos.push(param);
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.editForm = false;
    // reset();
  }

  deleteTodo = (index: number) => {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  };

  editTodo = (index: number) => {
    this.editForm = true;
    this.form.title = this.todos[index].text;
    this.form.id = this.todos[index].id;
    //todo: this function must be cleaner and better , its best that create a modal for edit todos
  }

  searchTodo = (todo: string) => {
    this.showTodo = this.todos.filter(item => item && item.text.search(todo) !== -1);
  }

  completedTodo = (index: number) => {
    this.todos[index].status = 'completed';
    let sortedTodo = this.sortTodo(this.todos);
    localStorage.setItem('todos', JSON.stringify(sortedTodo));
  }

  blockedTodo = (index: number) => {
    if(this.todos[index].status === "blocked") {
      this.todos[index].status = "in-progress";
    }else {
      this.todos[index].status = "blocked";
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  // blockedTodo = (index: number) => this.todos[index].status === "blocked" ? this.todos[index].status = "in-progress" : this.todos[index].status = "blocked";
}
