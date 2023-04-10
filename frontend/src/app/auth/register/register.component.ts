import { AuthService } from './../../../libs/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/libs/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegisterForm!:FormGroup
  imgSrc:any = '../../assets/profile-user.png'
  baseUrl='http://192.168.18.43:8000/api'
  header = {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    }
  };
  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    private router: Router,
    private authentication: AuthService
    ) { }


  ngOnInit() {
    this.userRegisterForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      confirmPassword: ['',[Validators.required]],
      image: ['',Validators.required]
    },
    {
      validator: passwordMatchValidator
    });


  }

  imageHandler(event: any) {
    console.log(event.target.files[0]);
    this.userRegisterForm.controls['image'].patchValue(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result;
      reader.readAsDataURL(file);
  }
  }

  register(){
    // if(this.userRegisterForm.invalid)
    // {
    //   if(this.userRegisterForm.controls['firstName'].errors?.['required'] && this.userRegisterForm.controls['lastName'].errors?.['required'])
    //   {
    //     alert("Name Filed Required")
    //   }
    //   else if(this.userRegisterForm.controls['password'].errors?.['required'] && this.userRegisterForm.controls['confirmPassword'].errors?.['required'])
    //   {
    //     alert("Password Field Required")
    //   }
    //   else if(this.userRegisterForm.controls['email'].errors?.['required'])
    //   // console.log(this.userRegisterForm.controls['email'].errors);
    //   {
    //     alert("Email Field Required")
    //   }
    //   else if(this.userRegisterForm.controls['email'].errors?.['email'])
    //   {
    //     alert("Wrong Email Format")
    //   }
    //     }
    // else
    // {    }

    console.log(this.userRegisterForm.getRawValue());
     this.userRegisterForm.getRawValue()
     let formdata = new FormData
     formdata.append('firstName',this.userRegisterForm.get('firstName')?.value)
     formdata.append('lastName',this.userRegisterForm.get('lastName')?.value)
     formdata.append('email',this.userRegisterForm.get('email')?.value)
     formdata.append('password',this.userRegisterForm.get('password')?.value)
     formdata.append('photo',this.userRegisterForm.get('image')?.value)

     console.log(formdata.get('email'));
     this.authentication.register(formdata).subscribe({
      next: x => console.log("response "+ x),
      error: err => console.log('error',err),
      complete: () => this.router.navigate(['/user/login']),
    })
    this.userRegisterForm.reset()
  }

}

