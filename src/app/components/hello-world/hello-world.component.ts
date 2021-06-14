import { Component, OnInit } from '@angular/core';
import { StudentRecords } from 'src/app/model/student-records';
import { User } from 'src/app/model/user';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

 user = new User
  displayedColumns: string[] = ['studentId','rollNumber', 'studentName', 'studentAge', 'studentAddress'];
  dataSource : StudentRecords[] = [{studentId:1,rollNumber: 1, studentName: 'Hydrogen', studentAge: 81, studentAddress: 'H'}];

  constructor(private _service : FetchDataService) { }

  ngOnInit(): void {
  }

  getData(){
    this._service.getDataFromRemote().subscribe(
      data => console.log('data'),
      error => console.log('error')
    );
    console.log('test',this.user);
  }
  postData(){
    this._service.postDataFromRemote(this.user).subscribe(
      data => console.log('data'),
      error => console.log('error')
    );
  }

}
