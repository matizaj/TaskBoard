import { Component } from '@angular/core';
import { doesNotThrow } from 'assert';
import { Task } from './models/task';
import { TaskService } from './_services/task.service';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Board';
  /**
   *
   */
  constructor(public authService: AuthService, private router: Router) {  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  }

