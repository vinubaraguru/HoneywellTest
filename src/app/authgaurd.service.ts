import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthgaurdService implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    // if(this.authService.isLoggedIn())
    //   return true;
    
    this.router.navigate(['/'],{ queryParams:{returnUrl: state.url}});
    return false;

  }
}