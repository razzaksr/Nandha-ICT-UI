import { Component } from '@angular/core';
import { Userservice } from '../services/userservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user = ''
  pass = ''
  error = ''
  constructor(public auth:Userservice){
    auth.signingOut()
  }
  // button when login clicked
  loggingIn(){
    this.auth.siginingIn(this.user,this.pass).subscribe((success)=>{
      if(!success)
        this.error="Invalid Credentials"
    })
  }
}
