import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor( private router: Router ){ }
logout() {
  sessionStorage.clear();
  alert("Logout Successfully!");
  this.router.navigate(['log-in'])
}

}
