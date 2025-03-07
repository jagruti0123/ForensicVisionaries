import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'; // Ensure ApiService exists
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fix styleUrl -> styleUrls
})
export class LoginComponent {
  loginFormCustomer: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.loginFormCustomer = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Fix form control names
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginFormCustomer.invalid) {
      this.errorMessage = 'Please fill in all fields correctly.';
      return;
    }

    const loginData = this.loginFormCustomer.value;

    // Call API for login
    this.apiService.login(loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);

        // Show success message
        Swal.fire({
          title: 'Success!',
          text: 'You are logged in.',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        // Store authentication flag & token
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('authToken', response.token);

        this.router.navigate(['/']).then(() => {
          window.location.reload(); // Reload to reflect login changes
        });
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password';
        Swal.fire({
          title: 'Error!',
          text: 'Invalid email or password',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    });
  }
}

