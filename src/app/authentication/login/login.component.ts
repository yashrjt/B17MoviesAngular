import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }


  login(){

    this.auth.login( this.loginForm.value).subscribe((response)=>{
      console.log("Login -> login -> response", response)
        this.router.navigate(['/home']);
      },
      (err)=>{
      console.log("Login -> login -> err", err)
        
      });

    this.loginForm.reset();
  }

}
