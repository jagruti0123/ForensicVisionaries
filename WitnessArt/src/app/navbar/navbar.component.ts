import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router){}
  isSearchOpen = false;

    toggleSearch() {
        this.isSearchOpen = !this.isSearchOpen;
    }

    logout() {
      localStorage.removeItem('isLoggedIn');
      this.router.navigate(['/']);  // Redirect to login page after logout
    }
}
