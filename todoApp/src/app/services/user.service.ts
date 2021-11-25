import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  currentUser: User | undefined;
  API = 'https://ensolvers-api.herokuapp.com/user';

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('user') as string) !== null ? JSON.parse(localStorage.getItem('user') as string) : null;
  }

  login(user: any){
    return this.http.post(this.API,user).toPromise();
  }
}
