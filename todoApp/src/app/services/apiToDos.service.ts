import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = 'https://ensolvers-api.herokuapp.com/todo';

  constructor(private http: HttpClient) { }

  getToDos(folder: any){
    return this.http.get(`${this.API}?id=${folder}`).toPromise();
  }

  addToDo(toDo: any){
    return this.http.post(`${this.API}/`, toDo).toPromise();
  }

  deleteToDo(toDo: any){
    return this.http.delete(`${this.API}/${toDo.id}`).toPromise();
  }

  updateToDo(toDo: any){
    return this.http.put(`${this.API}/${toDo.id}`, toDo).toPromise();
  }
}
