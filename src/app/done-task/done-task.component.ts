import { Component, OnInit } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  doneTask: Array<Task> = [];
  constructor(private taskService: TaskService) {
    this.taskService.getTaskList().subscribe( task => {
      this.doneTask = task.filter( t => t.isDone === true);
    });
  }

  ngOnInit() {
  }

}
