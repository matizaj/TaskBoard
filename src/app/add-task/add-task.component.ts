import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: string;
  taskList: Array<string> = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  addTask() {
    const task: Task = {name: this.newTask, created: new Date().toLocaleString(), isDone: false};
    this.taskService.addTask(task);
    this.newTask = '';
  }
}
