import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor( private fb: FormBuilder, private httpClient: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      id: [''],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required]

    })
    
  }

  onSubmit(){

    this.httpClient.post<any>("http://localhost:3000/users",this.signupForm.value)
    .subscribe(res => {alert("Signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['log-in']);
    }, err => {
      alert("Something went wrong");
    })
  }

}
