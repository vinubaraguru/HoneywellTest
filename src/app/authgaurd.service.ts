import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class Authgaurd implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let loginData = localStorage.getItem('logindata');
    if(loginData)
      return true
    // if(this.authService.isLoggedIn())
    //   return true;
    
    this.router.navigate(['/'],{ queryParams:{returnUrl: state.url}});
    return false;

  }
}