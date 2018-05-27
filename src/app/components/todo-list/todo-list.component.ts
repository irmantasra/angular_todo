import { Component, OnInit } from '@angular/core';

import shortid from 'shortid';

import todosData from '../../../data/todoItems';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
	todoItems:Item[];
	newTitle:string = '';
	editItem:string = '';
	editTitle:string = '';
  constructor() { }

  ngOnInit() {
		this.todoItems = todosData;
	}
	
	handleInputChange(title){
		this.newTitle = title;
		return false;
	}
	
	addTodo() {
		this.todoItems.unshift({
			id: shortid.generate(),
			title: this.newTitle,
			completed: false
		});
		this.newTitle = '';
		return false;
	}

	deleteTodo(id) {
		this.todoItems.map((item, index) => {
			if (item.id === id) this.todoItems.splice(index, 1);
		});
	}

	toggleTodoStatus(id) {
		this.todoItems = this.todoItems.map(item =>{
			if(item.id === id) return {id: item.id, title: item.title, completed: !item.completed};
			return item;
		})
	}

	toggleEditItem(id) {
		//console.log(id);
		this.editItem = id;
		this.todoItems.map(item => {
			if (item.id === id) this.editTitle = item.title;
		});
		console.log(this.editTitle);
		return false;
	}

	handleEditChange(title) {
		this.editTitle = title;
	}

	editTodo() {
		this.todoItems = this.todoItems.map(item => {
			if (item.id === this.editItem)
				return {
					id: item.id,
					title: this.editTitle,
					completed: item.completed
				};
			return item;
		});
		this.editItem = '';
		this.editTitle = '';
	}
}

interface Item {
	id:string,
	title:string,
	completed:boolean
}