import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'final-project';
  name!: any;
  
  ngOnInit(){
    this.name = localStorage.getItem("name");
  }
}
