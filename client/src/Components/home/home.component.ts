import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name!: any;
  
  constructor(private userService:UserService){ }

  ngOnInit(){
    this.name = localStorage.getItem("name");
  }
}
