import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  invalidLoginErrorMessage: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

    loginstarwars(formData){
      if (formData.email && formData.email == 'vinu@gmail.com'){
        if (formData.password && formData.password == '12345') {
          localStorage.setItem('logindata',formData);
          this.router.navigate(['/dashboard']);
        }else{
          this.invalidLoginErrorMessage = 'Authentication Failed'
          this.invalidLogin = true;
        }
      }else{
        this.invalidLoginErrorMessage = 'Email ID is not registered'
        this.invalidLogin = true;
      }
    }
}
