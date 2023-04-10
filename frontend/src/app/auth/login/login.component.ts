import { AuthService } from './../../../libs/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginForm!: FormGroup;
  baseUrl = 'http://192.168.18.43:8000/api/public/';
  header = {
    headers: {
      'ngrok-skip-browser-warning': '69420',
      'Content-Type': 'application/json',
    },
  };
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authentication: AuthService
  ) {}

  ngOnInit() {
    this.userLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    // if(this.userLoginForm.invalid)
    // {
    //   if(this.userLoginForm.controls['password'].errors?.['required'])
    //   {
    //     alert("Password Field Required")
    //   }
    //   else if(this.userLoginForm.controls['email'].errors?.['required'])
    //   // console.log(this.userRegisterForm.controls['email'].errors);
    //   {
    //     alert("Email Field Required")
    //   }
    //   else if(this.userLoginForm.controls['email'].errors?.['email'])
    //   {
    //     alert("Wrong Email Format")
    //   }
    // }
    // else
    // {
    // }
    let obj = {
      email: this.userLoginForm.get('email')?.value,
      password: this.userLoginForm.get('password')?.value
    }
    this.authentication.login(obj).subscribe({
      next: (x: any) => {
        console.log('res', x);
        // const obj={
        //   token:x.token
        // }
        let user = JSON.stringify(x)
        localStorage.setItem('token',user)
      },
      error: (err) => alert('error' + err),
      complete: () => this.router.navigate(['/dashboard']),
    });
    this.userLoginForm.reset();
  }
}
