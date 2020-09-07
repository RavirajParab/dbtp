import { Injectable } from '@angular/core';
import {User} from '../IDBTP';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DptpUtilityService {
  
  constructor(private myHttpClient:HttpClient) { }
  //registration
  RegisterUser(user: User): Observable<any>{
    // registration is a POST operation
   return this.myHttpClient
              .post('https://mycrudops.herokuapp.com/users',user);
  }
}
