import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: any = [];
  editMode: boolean = false;
  taskToEdit: any;
  newText: string = '';

  constructor(private api: ApiService, private _snackBar: MatSnackBar) {
    this.getToDos();
  }

  ngOnInit(): void {
  }

  getToDos(): void{
    this.api.getToDos().then((toDos: any) =>{
      this.tasks = toDos.data;
    });
  }

  addTask(): void{
    if(this.newText.length > 3){
      const newTask = {
        task: this.newText
      };
  
      this.api.addToDo(newTask).then((res: any) =>{
        this.newText;
        this.getToDos();
      });
    }
    else{
      this._snackBar.open('The task must be at least 4 characters long', 'Close!');
    }
  }

  finishTask(toDo: any): void{
    if(toDo.isFinished == 1){
      toDo.isFinished = "0";
    }
    else{
      toDo.isFinished = "1";
    }

    this.api.updateToDo(toDo).then(res =>{
      console.log(res);
      this.getToDos();
    });

  }

  beginEditMode(toDo: any): void{
    this.taskToEdit = toDo;
    this.editMode = true;
  }

  deleteToDo(toDo: any): void{
    this.api.deleteToDo(toDo).then(res =>{
      this.getToDos();
    });
  }

  updateToDo(){
    this.taskToEdit.task = this.newText;
    this.api.updateToDo(this.taskToEdit).then((res: any) =>{
      this.getToDos();
    });
    this.newText = '';
    this.editMode = false;
  }
}
