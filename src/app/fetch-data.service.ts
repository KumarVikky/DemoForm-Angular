import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  //depending injection in angular done through constructor.
  constructor(private _http:HttpClient) { }

  public postDataFromRemote(student:Student):Observable<any>{
    return this._http.post<any>("http://localhost:8080/student",student); 
  }

  public getDataFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8080/students"); 
  }
}
