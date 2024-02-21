import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/Models/User';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
//משתנה שיקבל את הניווט של השרת
  private baserUrl :string="https://localhost:5001";

  constructor(private http: HttpClient) { }
  
  public login(name:string, password:string):Observable<User>{

    return this.http.get<User>(`${this.baserUrl}/User/${name}/${password}`);
    
  }
} 
