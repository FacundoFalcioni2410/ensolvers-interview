import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFoldersService {

  API = 'http://localhost:3000/todo/folder/';

  constructor(private http: HttpClient) { }

  getFolders(){
    return this.http.get(this.API).toPromise();
  }

  addFolder(folder: any){
    return this.http.post(this.API, folder).toPromise();
  }

  deleteFolder(folder: any){
    return this.http.delete(this.API + folder.folder_id).toPromise();
  }
}
