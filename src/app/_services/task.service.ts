import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    const taskList = [
      {name: 'Angular 6', created: new Date().toLocaleString(), isDone: false},
      {name: '.net', created: new Date().toLocaleString(), isDone: false},
      {name: 'wspinanie', created: new Date().toLocaleString(), isDone: false},
      {name: 'jedzenie', created: new Date().toLocaleString(), end: '06.01.2019', isDone: true}
    ];
    this.taskListObs.next(taskList);
  }

  addTask(task: Task) {
    const list = this.taskListObs.getValue();
    list.push(task);
    this.taskListObs.next(list);
  }

  remove(task: Task) {
    const list = this.taskListObs.getValue().filter(e => e !== task);
    this.taskListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
    // this.doneTask.push(task);
    // this.remove(task);
    // this.doneListObs.next(this.doneTask);
  }

  getTaskList(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

}
