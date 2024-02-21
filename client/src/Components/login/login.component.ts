import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/Models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  name: string = "";
  password: string = "";
  error: string = "";
  clicked:boolean = false;
  userDetails:User=new User();

  constructor(private loginService: LoginService, private router: Router,private userService:UserService) {
      
      this.userService.getUserDetails().subscribe(res=>{
      this.userDetails=res;
    });
   }

  login(){
    this.clicked=false; 
    if (this.password.length < 8 || this.password.includes(' ')) {
      this.error = 'Invalid password';
    }
      return this.loginService.login(this.name, this.password).subscribe(
        (user:User)=>{
          localStorage.setItem("user",JSON.stringify(user));
          localStorage.setItem("name", JSON.stringify(user.name));
          this.clicked=true;
          this.userService.setUserDetails(user);
        },(error:any)=>{
          alert('error');
        }
      )
    }

}
