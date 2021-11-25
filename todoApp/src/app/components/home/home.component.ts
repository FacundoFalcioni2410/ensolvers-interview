import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentFolder: any;
  showFolders: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFolder(folder: any){
    this.currentFolder = folder;
    this.showFolders = false;
  }

}
