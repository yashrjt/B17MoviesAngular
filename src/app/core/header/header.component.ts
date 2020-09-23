import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogStatus:boolean;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.auth.isLoggedInObservable.subscribe((res)=>{
      this.userLogStatus=res;
      console.log("HeaderComponent -> ngOnInit ->  this.userLogStatus",  this.userLogStatus)
    })
  }


  logoff(){
  
    this.auth.logout();

  }
}
