import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/Models/todo.model';
import { DataService } from "../shared/Services/data.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }

  public add() {
    let todo: any = {
      id: this.dataService.form.id ? this.dataService.form.id :(this.dataService.todos.length + 1), // TODO timestamp
      text: this.dataService.form.title,
      completed: false
    }
    if(this.dataService.form.title) {
      this.dataService.addTodo(todo, this.dataService.form.id);
      this.dataService.form.title = '';
    }
  }

  public edit () {
    (<HTMLElement>document.querySelector('.form__btn--reset')).click();
  }
}
