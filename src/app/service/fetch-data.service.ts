import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  //depending injection in angular done through constructor.
  constructor(private _http:HttpClient) { }

  public postDataFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/student",user); 
  }

  public getDataFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8080/students"); 
  }
}
