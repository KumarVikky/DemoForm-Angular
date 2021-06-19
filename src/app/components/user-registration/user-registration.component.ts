import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user = new User();
  showErrorMsg : Boolean = false;
  showSuccessMsg : Boolean = false;
  showMessage : String = '';
  securityQuestionsOptions = [
    { name: "What is your Birthdate?", value: 'What is your Birthdate?' },
    { name: "What is Your old Phone Number", value: 'What is Your old Phone Number' },
    { name: "What is your Pet Name?", value: 'What is your Pet Name?' }
  ]

  constructor(private _service : UserDataService,private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    let validateResponse = this._service.validateUser(this.user);
    let userJson : Object = {
      'name':this.user.getFullName(),
      'userName': this.user.userName,
      'email': this.user.email,
      'password':this.user.password,
      'phone':this.user.phone,
      'age':23,
      'secretAnswer':this.user.securityAnswer,
      'secretQuestion':this.user.securityQuestion,  
    };
    console.log('hii',userJson);
    if(validateResponse === ''){
      this._service.createUser(userJson).subscribe(
      data => {
        this.showErrorMsg = false;
        this.showSuccessMsg = true;
        this.showMessage = data;
        console.log('data',data)
      },
      error => {
        this.showErrorMsg = true;
        this.showSuccessMsg = false;
        this.showMessage = error.message;
        console.log('error',error)
      }
    );
    }else{
      this.showErrorMsg = true;
      this.showSuccessMsg = false;
      this.showMessage = validateResponse;
    }
  }

  loginRedirect(): void {
    this._router.navigateByUrl('/login');
  }

}
