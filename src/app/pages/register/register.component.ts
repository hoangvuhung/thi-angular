import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      gender: [''],
      birthday: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    const user = {
      id: Math.random().toString(36).substring(2, 6),
      ...this.registerForm.value,
    };

    this.http.post('http://localhost:3000/users', user).subscribe(() => {
      alert('Đăng ký thành công!');
      this.registerForm.reset();
      this.router.navigate(['/']);
    });
  }
}
