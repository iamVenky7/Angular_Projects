import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  serviceData = inject(TodoService);
  taskInput = '';

  addTask() {
    this.serviceData.addTodo(this.taskInput);
    this.taskInput = '';
    // console.log(this.taskInput);
  }
  resetForm() {
    this.taskInput = '';
  }
}
