import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskService } from './_services/task.service';
import { HttpService } from './_services/http.service';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [TaskService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
