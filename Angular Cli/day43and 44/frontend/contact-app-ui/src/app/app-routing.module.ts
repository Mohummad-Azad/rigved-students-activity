import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowContactsComponent } from './show-contacts/show-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';


const routes: Routes = [
  {path : "", component:LoginComponent},
  {path : "login", component:LoginComponent},
  {path : "register", component:RegisterComponent},
  {path : "success/:id", component:ProfileComponent, children:[
  {path : "", component:DashboardComponent},
  {path : "dashboard", component:DashboardComponent},
  {path : "showContacts", component:ShowContactsComponent},
  {path : "addContact", component:AddContactsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
