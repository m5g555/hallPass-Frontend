import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pass } from '../passes';

@Injectable({
  providedIn: 'root'
})
export class PassGetterService {

  constructor(private http: HttpClient) { }
  getPasses(){
    return this.http.get('http://localhost:3000/passes')
  }
}
