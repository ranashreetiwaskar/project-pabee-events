import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../../services/app-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder, private router: Router, private appService: AppServiceService, private httpClient: HttpClient ){ }

loginForm!: FormGroup;
token: string = 'OgtiuVHLDuRKrKtM9traxpaTQz2XKftIIpXy1C7RAac3x5Y59B7pmtkfOMw7o8wp';

ngOnInit(): void {

  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}


login() {
  
  this.httpClient.get<any>("http://localhost:3000/users"
  ).subscribe(data => {
    const user = data.find((a:any) =>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });

    if(user){
      
      localStorage.setItem('token', this.token );
      alert("Login Success");
      this.loginForm.reset();
      this.router.navigate(['/list-products']);
    } else{
      alert("User not found!");
    }
},err =>{
  alert("Something went wrong!");
});

}

}
