import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';





export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'userdashboard', component: UserdashboardComponent},
    {path: 'admindashboard', component: AdmindashboardComponent  ,canActivate:[AuthGuard]},

    //{path: '**', pathMatch: 'full', redirectTo: 'home'  },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule],
    bootstrap: [AppComponent]
  })
  
  export class AppRoutingModule { }