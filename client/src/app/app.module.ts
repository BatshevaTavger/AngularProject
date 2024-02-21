import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../Components/home/home.component'
import { LoginComponent } from '../Components/login/login.component'
import { ListJobComponent } from '../Components/list-job/list-job.component'
import { JobComponent } from 'src/Components/job/job.component';
import { CustomPipe } from 'src/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListJobComponent,
    JobComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name!: any;

  ngOnInit(){

    this.name = localStorage.getItem("name");

  }
 }
