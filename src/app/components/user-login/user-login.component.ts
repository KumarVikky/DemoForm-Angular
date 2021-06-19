import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  user : User = new User();

  constructor(private _service : UserDataService,private _router : Router) { }

  ngOnInit(): void {
  }

  registerRedirect(): void {
    this._router.navigateByUrl('/register');
  }

  loginUser(): void{
    let userJson : Object = {'userName': this.user.userName,'password':this.user.password};
    console.log('hii',userJson);
    this._service.fetchUser(userJson).subscribe(
      data => {
        console.log('data',data)
      },
      error => {
        console.log('error',error)
      }
    );
    console.log('test',this.user);
  }

}
