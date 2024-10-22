import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.showError = false;

      // Simulate API call
      setTimeout(() => {
        const { username, password } = this.loginForm.value;
        
        if (username && password) {
          // Navigate to home page
          this.router.navigate(['/home']);
        } else {
          this.showError = true;
        }
        
        this.isLoading = false;
      }, 1000);
    } else {
      this.loginForm.markAllAsTouched();
      this.showError = true;
    }
  }

}
