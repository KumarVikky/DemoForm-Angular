import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Student } from '../student';
import { StudentRecords } from '../student-records';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  student = new Student('','');
  displayedColumns: string[] = ['rollNumber', 'studentName', 'studentAge', 'studentAddress'];
  dataSource : StudentRecords[] = [{rollNumber: 1, studentName: 'Hydrogen', studentAge: 81, studentAddress: 'H'}];

  constructor(private _service : FetchDataService) { }

  ngOnInit(): void {
  }

  getData(){
    this._service.getDataFromRemote().subscribe(
      data => console.log('data'),
      error => console.log('error')
    );
    console.log('test',this.student);
  }
  postData(){
    this._service.postDataFromRemote(this.student).subscribe(
      data => console.log('data'),
      error => console.log('error')
    );
  }

}
