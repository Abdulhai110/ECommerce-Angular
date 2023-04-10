import { AuthService } from './../../../libs/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit
{
  forgotPasswordForm!:FormGroup
  pageToggle:boolean=false

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private authentication: AuthService) { }

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  forgotPassword()
  {
    // if(this.forgotPasswordForm.invalid)
    // {
    //    if(this.forgotPasswordForm.controls['email'].errors?.['required'])
    //   // console.log(this.userRegisterForm.controls['email'].errors);
    //   {
    //     alert("Email Field Required")
    //   }
    //   else if(this.forgotPasswordForm.controls['email'].errors?.['email'])
    //   {
    //     alert("Wrong Email Format")
    //   }
    // }
    // else
    // {

    // }
  const obj={
    email:this.forgotPasswordForm.get('email')?.value
  }
    this.authentication.forgotPassword(obj).subscribe({
      next: (response:any)=> {
        console.log('response',response)
        if(response.success){
          this.pageToggle = !this.pageToggle
        }
      },
      error: error=> console.log('error',error),
      complete: ()=> {}


    })

      this.forgotPasswordForm.reset()
  }
}

