import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginmanager',
  templateUrl: './loginmanager.component.html',
  styleUrl: './loginmanager.component.css'
})
export class LoginmanagerComponent {

  loginFormManager!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginFormManager = this.fb.group({
      User_Name: ['', Validators.required],
      Password1: ['', Validators.required]
    });
  }

  onSubmit() {
    const username = this.loginFormManager.get('User_Name')?.value;
    const password = this.loginFormManager.get('Password1')?.value;

    if (username === 'Admin' && password === '987654') {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1800,
        width: "35rem"
      });
      Toast.fire({
        icon: "success",
        title: "Successfully Logged In!!"
      });

      this.router.navigate(['/inventory']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid username or password!'
      });
    }
  }
}
