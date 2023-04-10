import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  timer:any
  status: BehaviorSubject<any> = new BehaviorSubject<any>(null)
constructor() { }

showToast(msg:string, autoClose:boolean){
  this.status.next(msg)
  if(this.timer){
    clearTimeout(this.timer)
  }
  if(autoClose){
    this.timer = window.setTimeout(()=>{
      this.status.next(null)
    },4000)
  }
}
}
