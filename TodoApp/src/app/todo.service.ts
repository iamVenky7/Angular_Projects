import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  taskId: number = 0;
  todoList = [
    {
      id: 1,
      task: 'Task 1',
    },
  ];

  addTodo(taskName: string) {
    this.todoList.push({ id: this.taskId++, task: taskName });
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);

    // console.log(this.todoList.splice(index, 1));
  }
}
