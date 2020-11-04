import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../service/login-auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any = {};

  constructor(private userService: UserService, private authService: LoginAuthService) { 
    this.authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  saveUser(user:any, userForm: any) {
    user.enabled = true;
    this.userService.saveUser(user).subscribe((response) => {
      if(response){
        console.log(response);
        userForm.reset();
      }
    })

  }

}
