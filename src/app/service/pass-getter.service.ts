import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pass } from '../passes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassGetterService {

  constructor(private http: HttpClient) { }
  getPasses(){
    return this.http.get('http://localhost:3000/passes')
  }

  getTeachers(){
    return this.http.get('http://localhost:3000/teachers')
  }

  pushPass(pass: Pass){
    console.log('{"sendingTeacherName": "' + pass.sendingTeacher.name + '", "receivingTeacherName": "' + pass.receivingTeacher.name + '", "studentName": "' + pass.studentName + '", "reason": "' + pass.reason + '", "timeCreated": ' + pass.timeCreated + ', "state": ' + pass.state + '}')
    let body = {sendingTeacherName: pass.sendingTeacher.name, receivingTeacherName: pass.receivingTeacher.name, studentName: pass.studentName,  reason: pass.reason, timeCreated: pass.timeCreated, state: pass.state}
    console.log(body)
    return this.http.post('http://localhost:3000/passes', body)
  }

  deletePass(id: string){
    return this.http.delete('http://localhost:3000/passes/' + id)
  }
}
