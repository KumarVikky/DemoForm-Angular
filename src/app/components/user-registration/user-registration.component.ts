import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserDataService } from 'src/app/service/user-data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user = new User();

  constructor(private _service : UserDataService) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log('hii');
    this._service.createUser(this.user).subscribe(
      data => console.log('data'),
      error => console.log('error')
    );
    console.log('test',this.user);
  }

}
