import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../services/apiToDos.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() currentFolder: any;
  tasks: any = [];
  editMode: boolean = false;
  taskToEdit: any;
  newText: string = '';
  showFolders: boolean = false;

  constructor(private api: ApiService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos(): void{
    this.api.getToDos(this.currentFolder.folder_id).then((toDos: any) =>{
      this.tasks = toDos.data;
    });
  }

  addTask(): void{
    if(this.newText.length > 3){
      const newTask = {
        task: this.newText,
        folder_id: this.currentFolder.folder_id,
      };
  
      this.api.addToDo(newTask).then((res: any) =>{
        this.newText = '';
        this.getToDos();
      });
    }
    else{
      this._snackBar.open('The task must be at least 4 characters long', 'Close')._dismissAfter(3000);
    }
  }

  finishTask(toDo: any): void{
    if(toDo.isFinished === 1){
      toDo.isFinished = 0;
    }
    else{
      toDo.isFinished = 1;
    }

    this.api.updateToDo(toDo).then(res =>{
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
    if(this.newText.length > 3){
      this.taskToEdit.task = this.newText;
      this.api.updateToDo(this.taskToEdit).then((res: any) =>{
        this.getToDos();
        this.newText = '';
        this.editMode = false;
      });
    }
    else{
      this._snackBar.open('The task must be at least 4 characters long', 'Close')._dismissAfter(3000);
    }
  }
}
