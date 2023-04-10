import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/libs/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  toasterMsg=''
  showToast:boolean=false
  constructor(private toaster:ToasterService){}
  ngOnInit(): void {
    this.toaster.status.subscribe((msg:any)=>{
      if(msg === null){
        this.showToast = false
      }
      else{
        this.showToast = true
        this.toasterMsg = msg
      }
    })
  }
  close(){
    this.showToast = false
  }
}
