import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { LoginComponent } from './auth/login/login.component';
import { GuardService } from './_services/guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/todoTask', pathMatch: 'full' },
  {path: 'todoTask', component: TodoTaskComponent, canActivate: [GuardService]},
  {path: 'doneTask', component: DoneTaskComponent, canActivate: [GuardService]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
