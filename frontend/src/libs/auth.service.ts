import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // baseUrl = 'http://192.168.18.43:8000/api/public/';
  baseUrl = 'http://localhost:8000/api/public/';

  header: Object = {};

  constructor(private http: HttpClient) {}

  register(data: any) {
    const obervable = this.http.post(this.baseUrl + 'auth/signup', data);
    return obervable;
  }

  login(data: any) {
    const obervable = this.http.post(this.baseUrl + 'auth/sign', data);
    return obervable;
  }

  forgotPassword(data: any) {
    const obervable = this.http.post(
      this.baseUrl + 'auth/forgotPassword',
      data
    );
    return obervable;
  }

  resetPassword(data: any, id: any) {
    const obervable = this.http.post(
      this.baseUrl + 'auth/password/reset/' + id,
      data
    );
    return obervable;
  }

  verifyToken(id: any) {
    const obervable = this.http.post(
      this.baseUrl + 'auth/token/validate/' + id,
      {}
    );
    return obervable;
  }

  isLoggedIn(): any {
    if (localStorage.getItem('token')) {
      const tempToken: string | null = localStorage.getItem('token');
      const tokenIntoString: string = tempToken as string;
      const token = JSON.parse(tokenIntoString);
      this.header = {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };
    }
    else{
      this.header={}
    }

    const obervable = this.http.post(
      this.baseUrl + 'auth/token/varify',
      {},
      this.header
    );
    return obervable;
  }
}
