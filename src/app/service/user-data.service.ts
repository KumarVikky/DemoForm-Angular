import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  httpOptions : Object = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      
    }),responseType: 'text' as 'json'
  };

  constructor(private _http: HttpClient) { }

  public createUser(user : any):Observable<any>{
    return this._http.post<any>('http://localhost:8080/user/register',user,this.httpOptions);
  }

  public fetchUser(user: any):Observable<any>{
    return this._http.post<any>('http://localhost:8080//user/login',user,this.httpOptions);
  }
}
