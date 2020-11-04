import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../service/login-auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public loginuser: any = {};
  public users: any = [];

  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginuser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.getAllUsers(this.loginuser.token).subscribe(users => {
      this.users = users;
    }, err => {
      console.log(err);
    })
  }

}
