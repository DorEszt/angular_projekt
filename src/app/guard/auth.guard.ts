import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router){}

  canActivate(){
      if(this.auth.isLoggedIn() ){
        return true;
      }
      // this.auth.redirectUrl = state.url
      this.router.navigate(['/user/login']);
      return false;
  }
}
