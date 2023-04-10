import { AuthService } from './../../../libs/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { passwordMatchValidator } from 'src/libs/validator';

@Component({
  selector: 'app-resetPassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.css']
})
export class ResetComponent implements OnInit {

  resetPasswordForm!:FormGroup
  id!:any
  resetPage:boolean=false

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    private authentication: AuthService
    ) { }

  ngOnInit() {
    this.resetPasswordForm = this.fb.group({
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]]
    },
    {
      validator: passwordMatchValidator
    });
    this.id=this.router.snapshot.paramMap.get('id')
    console.log(this.id);
    this.authentication.verifyToken(this.id).subscribe({
      next: (response:any) => {
        console.log('response',response)
        if(response.success){
          this.resetPage = !this.resetPage
        }
      },
      error:err=> console.log('error', err),
      complete: ()=>{}


    })
  }

  resetPassword(){
    // if(this.resetPasswordForm.invalid)
    // {
    //   if(this.resetPasswordForm.controls['password'].errors?.['required'])
    //   {
    //     alert("Password Field Required")
    //   }
    //   else if(this.resetPasswordForm.controls['confirmPassword'].errors?.['required'])
    //   // console.log(this.userRegisterForm.controls['email'].errors);
    //   {
    //     alert("Email Field Required")
    //   }
    // }
    // else
    // {


    // }
    let obj={
      password: this.resetPasswordForm.get('password')?.value,
      confirmPassword: this.resetPasswordForm.get('confirmPassword')?.value
    }
    console.log(obj);

    this.authentication.resetPassword(obj, this.id).subscribe({
      next: (response:any)=>{
        console.log('response',response);

      },
      error: (error:any)=>{
        console.log('error',error);
      },
      complete:()=>{this.route.navigate(['/user/login'])}
    })

    this.resetPasswordForm.reset()
  }

}
