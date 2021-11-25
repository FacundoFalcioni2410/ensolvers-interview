import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentFolder: any;
  showFolders: boolean = true;

  constructor(private userS: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  receiveFolder(folder: any){
    this.currentFolder = folder;
    this.showFolders = false;
  }

  logout(){
    this.userS.currentUser = undefined;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
