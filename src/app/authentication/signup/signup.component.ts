import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, EmailValidator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService) { }

  ngOnInit() {
   this.signUpForm= this.fb.group({
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(4)]],
        passwordConfirm:['',[Validators.required,,Validators.minLength(4)]]
    })

  }

  signUp(){
   
    this.authService.register(this.signUpForm.value).subscribe((response)=>{
    console.log("SignupComponent -> signUp -> response", response)
      
    },
    (err)=>{
    console.log("SignupComponent -> signUp -> err", err)
      
    });
    this.signUpForm.reset();

  
  }

}
