import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/libs/admin.service';

@Component({
  selector: 'app-registeredUsers',
  templateUrl: './registeredUsers.component.html',
  styleUrls: ['./registeredUsers.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  users:any = []
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.adminService.getUsers().subscribe({
      next: (res:any)=>{
        console.log('users',res);
        this.users = res.data
      },
      error: (err:any)=>{console.log('error',err);
      },
      complete: ()=>{console.log('complete');
      },

    })
  }

}
