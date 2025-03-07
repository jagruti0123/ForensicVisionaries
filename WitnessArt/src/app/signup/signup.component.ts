import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service'; // Import the API service
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService // Inject API service
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],               // Updated to match backend field
      first_name: ['', Validators.required],             // Updated to match backend field
      last_name: ['', Validators.required],              // Updated to match backend field
      email: ['', [Validators.required, Validators.email]], // Updated to match backend field
      dob: ['', Validators.required],
      mobile_number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Updated to match backend field
      password: ['', [Validators.required, Validators.minLength(6)]]  // Updated to match backend field
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    // Mapping form values to user data object with updated field names
    const userData = {
      username: this.signupForm.value.username,              // Updated to match backend field
      first_name: this.signupForm.value.first_name,          // Updated to match backend field
      last_name: this.signupForm.value.last_name,            // Updated to match backend field
      email: this.signupForm.value.email,                    // Updated to match backend field
      dob: this.signupForm.value.dob,
      mobile_number: this.signupForm.value.mobile_number,    // Updated to match backend field
      password: this.signupForm.value.password               // Updated to match backend field
    };

    console.log('Submitting:', userData); // Debugging

    this.apiService.signup(userData).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        alert('Signup successful!');

        // Redirect to login page after successful signup
      this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Signup failed:', error);
        alert('Signup failed. Please try again.');
      },
      complete: () => {
        console.log('Signup request completed.');
      }
    });
  }
}

