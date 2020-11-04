import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.http = http;
   }

   saveUser(user: any): Observable<any> {
     const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
     return this.http.post("http://localhost:8088/registration", user, {headers: headers});
   }

   loginUser(user: any): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    return this.http.post("http://localhost:8088/login", user, {headers: headers});
  }

  getAllUsers(token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer' +token+'897'});
    return this.http.get("http://localhost:8088/users", {headers: headers});
  }

  getUser(token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer' +token + '897'});
    return this.http.get("http://localhost:8088/getuser", {headers: headers});
  }
}

