import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Services/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchValue: string = '';

  constructor(
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  public search() {
    this._dataService.searchTodo(this.searchValue);
  }

}
