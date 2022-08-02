import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/Services/data.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public inputValue: string = '';
  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
  }
  public add() {
    let todo: any = {
      id: (this._dataService.todos.length + 1),
      text: this.inputValue,
      completed: false
    }
    if(this.inputValue) {
      this._dataService.addTodo(todo);
      this.inputValue = '';
    }
  }
}
