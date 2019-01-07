import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly apiUrl = 'https://api.mlab.com/api/1/databases/taskboard_db/collections/task';
  readonly param = new HttpParams().set('apiKey', 'SAJFe8nWyFPVfXpa8KfFVwyWP8Kr3ysn');

  constructor(private http: HttpClient) {
    this.getTask();
   }

  getTask(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.apiUrl, {params: this.param});
  }

  addTask(tasks: Array<Task>) {
    this.http.put(this.apiUrl, tasks, {params: this.param}).
    subscribe( data => {
      console.log(data);
    }, error => {
      console.log('failed with post method' + error);
    });
  }

  // removeTask(id: {}) {
  //   this.http.delete(this.apiUrl + '/' + id, {params: this.param}).
  //   subscribe( data => {
  //     console.log(data);
  //   }, error => {
  //     console.log('failed with delete' + error);
  //   });
  // }
}
