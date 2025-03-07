import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginmanagerComponent } from './loginmanager/loginmanager.component';
import { JKGarmentsComponent } from './jkgarments/jkgarments.component';
import { PetterenglandComponent } from './petterengland/petterengland.component';
import { VaishaligarmentsComponent } from './vaishaligarments/vaishaligarments.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ViewinventoryComponent } from './viewinventory/viewinventory.component';
import { FacesketchComponent } from './facesketch/facesketch.component';
import { AuthGuard } from './auth.guard'; // Import AuthGuard

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path: "facesketch",
    component: FacesketchComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"administator",
    component:LoginmanagerComponent
  },
  {
    path:"jk",
    component:JKGarmentsComponent
  },
  {
    path:"peter",
    component:PetterenglandComponent
  },
  {
    path:"vaishali",
    component:VaishaligarmentsComponent
  },
  {
    path:"inventory",
    component:InventoryComponent
  },
  {
    path:"viewinventory",
    component:ViewinventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
