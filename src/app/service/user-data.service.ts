import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  msgBody : any = {hasError : false, message : ''};
  
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

  public validateRegisterUser(user:User):any{
    if(user.firstName === '' || user.firstName === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'First Name cannot be blank';
    }else if(user.lastName === '' || user.lastName === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Last Name cannot be blank';
    }else if(user.email === '' || user.email === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Email Name cannot be blank';
    }else if(user.phone === null || user.phone === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Phone cannot be blank';
    }else if(user.userName === '' || user.userName === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Email cannot be blank';
    }else if(user.password === '' || user.password === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Password cannot be blank';
    }else if(user.confirmPassword === '' || user.confirmPassword === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Confirm Password cannot be blank';
    }else if(user.securityQuestion === 'Please select your Sequrity Question'){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Please select security question';
    }else if(user.securityAnswer === '' || user.securityAnswer === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Security Answer cannot be blank';
    }else if(user.password !== user.confirmPassword){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Password not matched'; 
    }
    return this.msgBody;
  }
  public validateLoginUser(user :User):any{
    if(user.userName === '' || user.userName === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'User Name should not be blank';
    }else if(user.password === '' || user.password === undefined){
      this.msgBody.hasError = true;
      this.msgBody.message = 'Password should not be blank';
    }
    return this.msgBody;
  }
}
