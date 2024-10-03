import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService implements OnInit {

  constructor( private httpClient: HttpClient ) { }

  getLoginData(){

    return this.httpClient.get<any>('http://localhost:3000/users/');
    
  }

  ngOnInit(): void {

    
  }
}
