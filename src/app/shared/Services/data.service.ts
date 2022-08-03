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
  public sortType:string = '';


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

  public sortTodo(array: Todo[], type: any) {

    if (type === 'both'){
      this.sortTodo(this.todos, 'text');
      this.sortTodo(this.todos, 'status');
      return this.todos;
    } else{
      return array.sort((first: any, second: any) => {
        if(first[type] > second[type]) {
          return 1;
        }else if (first[type] < second[type]) {
          return -1;
        }else {
          return 0;
        }
      });
    }

  }

  public addTodo(param: Todo, id:any) {
    if (id){
      this.todos.forEach((item) =>{
        if (id === item.id) {
          item.text = param.text;
        }
      });
      this.form.id = '';
    }else {
      this.todos.push(param);
    }

    this.todos = this.sortTodo(this.todos, this.sortType);
    console.log('this.todos', this.todos);
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
    this.todos[index].status = 3;
    this.todos = this.sortTodo(this.todos, this.sortType);
    this.setToLocalStorage('todos', this.todos);
  }

  blockedTodo = (index: number) => {
    if(this.todos[index].status === 2) {
      this.todos[index].status = 1;
    }else {
      this.todos[index].status = 2;
    }
    this.setToLocalStorage('todos', this.todos);
  }
  // blockedTodo = (index: number) => this.todos[index].status === "blocked" ? this.todos[index].status = "in-progress" : this.todos[index].status = "blocked";
}
