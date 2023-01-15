import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent {

  constructor(private auth: AuthService, 
              private router: Router){}
  userNavbar = false;

  user(){
    this.userNavbar = !this.userNavbar;
  }
  logout(){

      this.auth.logout();
      console.log('Kilépés');
      this.router.navigate(['home'])
  }
}
