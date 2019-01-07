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
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './_services/auth.service';
import { GuardService } from './_services/guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const config = {
  apiKey: 'AIzaSyCAWZM9v6uRhJOnYETTR06rwHjxPFGGtzA',
  authDomain: 'taskboard-a04c2.firebaseapp.com',
  databaseURL: 'https://taskboard-a04c2.firebaseio.com',
  projectId: 'taskboard-a04c2',
  storageBucket: 'taskboard-a04c2.appspot.com',
  messagingSenderId: '744578893039'
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [TaskService, HttpService, AuthService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
