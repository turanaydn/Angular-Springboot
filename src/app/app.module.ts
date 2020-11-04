import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserService } from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './service/auth.guard';
import { LoginAuthService } from './service/login-auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserdashboardComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    UserService,
    AuthGuard,
    LoginAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
