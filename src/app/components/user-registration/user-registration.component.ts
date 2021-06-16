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
  constructor(private _service : UserDataService,private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    let userJson : Object = {'userName': this.user.userName,'userEmail': this.user.email,'userPassword':this.user.password};
    console.log('hii',userJson);
    this._service.createUser(userJson).subscribe(
      data => {
        console.log('data',data)
      },
      error => {
        console.log('error',error)
      }
    );
    console.log('test',this.user);
  }

  loginRedirect(): void {
    this._router.navigateByUrl('/login');
  }

}
