import { Component, OnInit } from '@angular/core';

import todosData from '../../../data/todoItems';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	todoItems:Item[];
  constructor() { }

  ngOnInit() {
		this.todoItems = todosData;
  }

}

interface Item {
	id:number,
	title:string,
	completed:boolean
}