import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {


  constructor(
    public dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }

  public deleteTodo = (index: number): void => this.dataService.deleteTodo(index);
}
