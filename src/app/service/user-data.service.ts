import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private _http: HttpClient) { }

  public createUser(user : User):Observable<any>{
    return this._http.post<any>('http://localhost:8080/user',user);
  }

  public fetchUser(user: User):Observable<any>{
    return this._http.post<any>('http://localhost:8080/user',user);
  }
}
