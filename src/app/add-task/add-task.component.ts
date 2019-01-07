import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { Task } from '../models/task';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
// export class AddTaskComponent implements OnInit {
//   addForm: FormGroup;
//   constructor(private taskService: TaskService) { }

//   ngOnInit() {
//     this.addForm = new FormGroup({
//       taskName: new FormArray([new FormControl(null, Validators.required)])
//     });
//   }
//   addTask() {
//     const taskList = this.createTaskList();
//     this.taskService.add(taskList);
//     // this.newTask = '';
//   }
//   addField() {
//     const arr = <FormArray>this.addForm.get('taskName');
//     arr.push(new FormControl(null, Validators.required));
//   }

//   createTaskList(): Array<Task> {
//     const taskList = new Array<Task>();
//     const taskArr = <[string]>this.addForm.get('taskName').value;
//     taskArr.forEach(t => {
//       const task = {name: t, created: new Date().toLocaleString(), isDone: false};
//       taskList.push(task);
//     });
//     return taskList;
//   }
// }

 export class AddTaskComponent implements OnInit {
   addForm: FormGroup;
   constructor(private taskService: TaskService) { }

   ngOnInit() {
    this.addForm = this.initForm();
   }

initForm() {
  return new FormGroup({
    taskName: new FormArray([new FormControl(null, Validators.required)])
  });
}

   addTask() {
     const taskList = this.createTaskList();
     this.taskService.add(taskList);
     this.addForm = this.initForm();
  }
   addField() {
     const arr = <FormArray>this.addForm.get('taskName');
     arr.push(new FormControl(null, Validators.required));
   }

   createTaskList(): Array<Task> {
     const taskList = new Array<Task>();
     const taskArr = <[string]>this.addForm.get('taskName').value;
     taskArr.forEach(t => {
       const task = {name: t, created: new Date().toLocaleString(), isDone: false};
       taskList.push(task);
     });
     return taskList;
   }
 }
