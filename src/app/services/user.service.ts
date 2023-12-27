import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserData } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  adress:string="http://localhost:3000"
  constructor(private http:HttpClient) { }

  getData(): Observable<UserData[]>{
    return this.http.get<UserData[]>(`${this.adress}/data`);
  }

  saveData(data: any): Observable<any> {
    return this.http.post(`${this.adress}/save`, data);
  }
}
