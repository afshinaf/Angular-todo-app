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

  public setToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
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
    console.log("add 1", param, id);
    if (id){
      console.log("add 2")
      this.todos.forEach((item) =>{
        console.log("add 3")
        if (id === item.id) {
          item.text = param.text;
          console.log("add 4")
        }
      });
    }else {
      console.log("add 5")
      this.todos.push(param);
    }
    console.log("add 6")
    this.setToLocalStorage('todos', this.todos);
    this.editForm = false;
    // reset();
  }

  deleteTodo = (index: number) => {
    this.todos.splice(index, 1);
    this.setToLocalStorage('todos', this.todos)
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
    this.setToLocalStorage('todos', sortedTodo);
  }

  blockedTodo = (index: number) => {
    if(this.todos[index].status === "blocked") {
      this.todos[index].status = "in-progress";
    }else {
      this.todos[index].status = "blocked";
    }
    this.setToLocalStorage('todos', this.todos);
  }
  // blockedTodo = (index: number) => this.todos[index].status === "blocked" ? this.todos[index].status = "in-progress" : this.todos[index].status = "blocked";
}
