import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InventoryComponent } from './inventory/inventory.component';
import { JKGarmentsComponent } from './jkgarments/jkgarments.component';
import { PetterenglandComponent } from './petterengland/petterengland.component';
import { LoginmanagerComponent } from './loginmanager/loginmanager.component';
import { VaishaligarmentsComponent } from './vaishaligarments/vaishaligarments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewinventoryComponent } from './viewinventory/viewinventory.component';
import { FormsModule } from '@angular/forms';
import { FacesketchComponent } from './facesketch/facesketch.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    InventoryComponent,
    JKGarmentsComponent,
    PetterenglandComponent,
    LoginmanagerComponent,
    VaishaligarmentsComponent,
    ViewinventoryComponent,
    FacesketchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
