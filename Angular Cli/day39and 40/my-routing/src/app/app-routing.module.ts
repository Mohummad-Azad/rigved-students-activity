import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { AuthenticGuard } from './authentic.guard';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';
import { ForgetPaswordComponent } from './forget-pasword/forget-pasword.component';
import { VerificationComponent } from './verification/verification.component';


const routes: Routes = [
   
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "success/:name", component : SuccessComponent, canActivate: [AuthenticGuard], children: [
    {path : "", component : DashboardComponent},
    {path : "dashboard", component : DashboardComponent},
    {path : "search", component : SearchComponent},
    {path : "list", component : ListComponent}
  ]},
    {path :  "authentication-page", component : AuthenticationPageComponent},
    {path : "forget-pasword", component : ForgetPaswordComponent , canActivate : [AuthenticGuard], children : [
    {path : "verification", component :VerificationComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
