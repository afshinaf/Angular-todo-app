import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputValue: string = '';
  todoList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.resetInput();
  }

  getInputValue = (e: Event): any => {
    this.inputValue = (<HTMLInputElement>e.target).value;
  }

  createEditButton = () => {
    const editIcon = (<HTMLElement>document.createElement('i'));
    editIcon.classList.add('fa-solid', 'fa-pen');
    const editButton = (<HTMLElement>document.createElement('button'));
    editButton.classList.add('btn')
    editButton.appendChild(editIcon);
    return editButton;
  }

  createDeleteButton = () => {
    const deleteIcon = (<HTMLElement>document.createElement('i'));
    deleteIcon.classList.add('fa-solid', 'fa-trash-can');
    const deleteButton = (<HTMLElement>document.createElement('button'));
    deleteButton.classList.add('btn')
    deleteButton.appendChild(deleteIcon);
    return deleteButton;
  }

  createDivElement = () => {
    const div = (<HTMLElement>document.createElement('div'));
    div.classList.add('list__item--buttons')
    div.appendChild(this.createDeleteButton());
    div.appendChild(this.createEditButton());
    return div;
  }

  createListTitle = () => {
    const title = (<HTMLElement>document.createElement('h3'));
    title.classList.add('list__item--title');
    title.textContent = this.inputValue;
    return title;
  }

  createList = () => {
    const list = (<HTMLElement>document.createElement('li'));
    list.classList.add('list__item');
    list.appendChild(this.createListTitle());
    list.appendChild(this.createDivElement());
    return list;
  }

  resetInput = () => {
    const resetButton = (<HTMLInputElement>document.getElementById('reset'));
    resetButton.addEventListener('click', () => {
      this.inputValue = '';
    })
  }

  addTodo = (e: Event): void => {
    e.preventDefault();
    if (this.inputValue) {
      (<HTMLElement>document.querySelector('.container__list')).appendChild(this.createList());
      (<HTMLInputElement>document.getElementById('reset')).click();
      this.inputValue = '';
    }
  }
}
