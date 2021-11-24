import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = 'http://localhost:3000/todo/';

  constructor(private http: HttpClient) { }

  getToDos(){
    return this.http.get(this.API).toPromise();
  }

  addToDo(toDo: any){
    return this.http.post(this.API, toDo).toPromise();
  }

  deleteToDo(toDo: any){
    return this.http.delete(this.API + toDo.id).toPromise();
  }

  updateToDo(toDo: any){
    return this.http.put(this.API + toDo.id, toDo).toPromise();
  }
}
