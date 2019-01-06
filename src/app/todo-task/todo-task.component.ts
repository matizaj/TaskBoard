import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input() taskList: Array<Task> = [];
  constructor(private taskService: TaskService) {
    this.taskService.getTaskList().subscribe( task => {
      this.taskList = task.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }
  done(task: Task) {
    this.taskService.done(task);
  }

}
