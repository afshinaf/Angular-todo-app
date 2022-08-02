import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/Services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public todo = this.dataService.todos;

  constructor(
    public dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }

  public deleteTodo = (index: number): void => this.dataService.deleteTodo(index);
  public editTodo = (index: number) => this.dataService.editTodo(index);
  public completedTodo = (index: number) => this.dataService.completedTodo(index);
  public blockTodo = (index: number) => this.dataService.blockedTodo(index);
}
