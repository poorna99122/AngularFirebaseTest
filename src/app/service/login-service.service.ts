import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router: Router) { }

  isLoggedIn(){
    return true;
  }

  login(){
    if(!this.isLoggedIn()){
      this.router.navigate(['/errorpage']);
    }
  }



  // isNotLoggedIn(){
  //   this.router.navigate(['/errorpage']);
  // }
}
