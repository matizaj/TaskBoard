import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  taskList: Array<Task> = [];
  constructor(private taskService: TaskService) {
    this.taskService.getTaskListObs().subscribe( task => {
      this.taskList = task.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.taskService.remove(task);
    // this.taskService.removeTaskFromDb(task._id.$oid);
  }
  done(task: Task) {
    task.end = new Date().toLocaleString();
    this.taskService.done(task);
  }
  saveTasks() {
    this.taskService.saveTasksinDb();
  }

}
