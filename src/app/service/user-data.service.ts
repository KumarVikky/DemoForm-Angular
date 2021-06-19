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
    //return this._http.post<any>('http://localhost:8080/user/register',user,this.httpOptions);
    return this._http.post<any>('https://form-data-spring.herokuapp.com/user/register',user,this.httpOptions);
  }

  public fetchUser(user: any):Observable<any>{
    //return this._http.post<any>('http://localhost:8080//user/login',user,this.httpOptions);
    return this._http.post<any>('https://form-data-spring.herokuapp.com/user/login',user,this.httpOptions);
  }

  public validateUser(user:User):String{
    let msgBody : String = '';
    if(user.firstName === '' || user.firstName === undefined){
      msgBody = 'First Name cannot be blank';
    }else if(user.lastName === '' || user.lastName === undefined){
      msgBody = 'Last Name cannot be blank';
    }else if(user.email === '' || user.email === undefined){
      msgBody = 'Email Name cannot be blank';
    }else if(user.phone === null || user.phone === undefined){
      msgBody = 'Phone cannot be blank';
    }else if(user.userName === '' || user.userName === undefined){
      msgBody = 'Email cannot be blank';
    }else if(user.password === '' || user.password === undefined){
      msgBody = 'Password cannot be blank';
    }else if(user.confirmPassword === '' || user.confirmPassword === undefined){
      msgBody = 'Confirm Password cannot be blank';
    }else if(user.securityQuestion === 'Please select your Sequrity Question'){
      msgBody = 'Please select security question';
    }else if(user.securityAnswer === '' || user.securityAnswer === undefined){
      msgBody = 'Security Answer cannot be blank';
    }else if(user.password !== user.confirmPassword){
      msgBody = 'Password not matched'; 
    }
    return msgBody;
  }
}
