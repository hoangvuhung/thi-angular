import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    this.http.get<any[]>('http://localhost:3000/users').subscribe((users) => {
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        alert(`Đăng nhập thành công! Xin chào ${foundUser.name}`);
        this.loginForm.reset();
        this.router.navigate(['/']);
      } else {
        alert('Email hoặc mật khẩu không đúng!');
      }
    });
  }
}
