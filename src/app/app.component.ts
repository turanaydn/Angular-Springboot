import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from './service/login-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Subscreasy';
  public currentstatus: any;

  constructor(private authService: LoginAuthService, private router: Router) {
    this.currentstatus = this.authService.getStatus().subscribe(currentstatus => {
      this.currentstatus = currentstatus;
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);

  }


}
