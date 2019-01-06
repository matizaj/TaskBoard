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

  getTask() {
    this.http.get(this.apiUrl, {params: this.param}).
    subscribe(task => {
      console.log(task);
    }, error => {
      console.log('failed to get task');
    });
  }
}
