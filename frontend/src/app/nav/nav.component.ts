import { Router } from '@angular/router';
import { AuthService } from './../../libs/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  token!: any;
  role: boolean = false;
  profileDiv: boolean = false;
  toggelDiv: boolean = false;
  isLoggedIn: boolean = false;

  imgSrc: any = '../../assets/profile-user.png';
  constructor(private authService: AuthService, private router: Router ) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe({
      next: (x: any) => {
        if (x.success) {
          console.log('ressss',x);
          this.isLoggedIn = true
          if(x.data.role == 'admin'){
            this.role = true;
          }

        }
      },
      error: (error: any) => {},
      complete: () => {},
    });
  }
  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('cart')
    this.isLoggedIn = false;
    this.role = false
    this.profile()
  }
  profile() {
    this.profileDiv = !this.profileDiv;
  }
  toggle() {
    this.toggelDiv = !this.toggelDiv;
  }
  isLogedIn(){
    this.authService.isLoggedIn().subscribe({
      next: (x: any) => {
        if (x.success) {
          this.router.navigate(['/user/cart'])
        } else {
          this.router.navigate(['/user/login']);
        }
      },
      error: (error: any) => {this.router.navigate(['/user/login'])},
      complete: () => {},
    });
  }
}
