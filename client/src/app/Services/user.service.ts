import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { User } from 'src/Models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // user:User|null=null;
  private baseUrl = 'https://localhost:5001';

  constructor(private http: HttpClient) { }

  login(name: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/User/${name}/${password}`);
  }
  
  private userDetails = new Subject<User>();

  getUserDetails(){
    return this.userDetails.asObservable();
  }
  setUserDetails(user: User){
    
    console.log(user);
    
    this.userDetails.next(user);
  }
}


