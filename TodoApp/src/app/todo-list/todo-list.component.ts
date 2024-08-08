import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  serviceData = inject(TodoService);

  todoList = this.serviceData.todoList;

  removeTodo(index: number) {
    console.log(index);
    this.serviceData.deleteTodo(index);
  }
}
