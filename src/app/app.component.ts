import { Component } from '@angular/core';
import { doesNotThrow } from 'assert';
import { Task } from './models/task';
import { TaskService } from './_services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Board';
  constructor(private taskService: TaskService) {

  }

  saveTasks() {
    this.taskService.saveTasksinDb();
  }
}
