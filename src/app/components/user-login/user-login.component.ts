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
  showErrorMsg : Boolean = false;
  showSuccessMsg : Boolean = false;
  showMessage : String = '';

  constructor(private _service : UserDataService,private _router : Router) { }

  ngOnInit(): void {
  }

  registerRedirect(): void {
    this._router.navigateByUrl('/register');
  }

  loginUser(): void{
    let validateResponse = this._service.validateLoginUser(this.user);
    let userJson : any = {'userName': this.user.userName,'password':this.user.password};
    console.log('hii',userJson);
    if(validateResponse.hasError){
      this.showErrorMsg = true;
      this.showSuccessMsg = false;
      this.showMessage = validateResponse.message;
    }else{
      this._service.fetchUser(userJson).subscribe(
        data => {
          this.showErrorMsg = false;
          this.showSuccessMsg = true;
          this.showMessage = JSON.parse(data).message;
          console.log('data',data);
          this._router.navigateByUrl('/home');
        },
        error => {
          this.showErrorMsg = true;
          this.showSuccessMsg = false;
          this.showMessage = error.message;
          console.log('error',error);
        }
      );
    }
  }

}
