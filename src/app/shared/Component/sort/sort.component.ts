import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/data.service";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) {
  }

  ngOnInit(): void {
  }

  onSelectSortType(): void {
    this.dataService.todos = this.dataService.sortTodo( this.dataService.todos, this.dataService.sortType );
  }
}
