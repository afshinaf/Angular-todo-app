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

  public generateId() {
    let uniqueId = new Date().getTime();
    return uniqueId;
  }

  public add() {
    this.generateId();
    let todo: any = {
      id: this.dataService.form.id ? this.dataService.form.id :(this.generateId()), // TODO timestamp
      text: this.dataService.form.title,
      status: 0
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
