import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { StudentRecords } from 'src/app/model/student-records';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() studentList : String = '';
  displayedColumns: string[] = ['studentId', 'studentName', 'studentRollNumber', 'studentAge','studentEmail', 'studentAddress'];
  dataSource: any[]= [];

  constructor() { }

  ngOnInit(): void {
    if(history.state.data !== undefined){
      let getData = history.state.data;
      console.log('fetch--->',getData);
      let studentRecords: StudentRecords[] = JSON.parse(getData).data;
      console.log('obj---->',studentRecords);
      this.dataSource = studentRecords;
    }
  }

}
