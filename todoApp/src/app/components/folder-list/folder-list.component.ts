import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiFoldersService } from 'src/app/services/apiFolders.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss']
})
export class FolderListComponent implements OnInit {

  @Output() sendFolder: EventEmitter<any> = new EventEmitter();
  folders: any = [];
  newText: string = '';

  constructor(private api: ApiFoldersService, private _snackBar: MatSnackBar) {
    this.getFolders();
  }

  ngOnInit(): void {
  }

  sendSelectedFolder(folder: any){
    this.sendFolder.emit(folder);
  }

  getFolders(){
    this.api.getFolders().then((res: any) =>{
      this.folders = res.data;
    });
  }
  
  addFolder(){
    if(this.newText.length > 3){
      const newFolder = {
        title: this.newText
      };
  
      this.api.addFolder(newFolder).then((res: any) =>{
        this.newText = '';
        this.getFolders();
      });
    }
    else{
      this._snackBar.open('The folder must be at least 4 characters long', 'Close')._dismissAfter(3000);
    }
  }

  deleteFolder(folder: any){
    this.api.deleteFolder(folder).then((res: any) =>{
      this.getFolders();
    });
  }
}
