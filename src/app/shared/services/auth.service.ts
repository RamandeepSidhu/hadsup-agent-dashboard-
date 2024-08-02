import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from '../interfaces/auth.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = `${environment.apiUrl}/api/auth/`;
  constructor(private http: HttpClient) {}

  Login(data: LoginRequest) {
    if (data) data['scopes'] = ['api'];
    const MethodName: string = 'login';
    const url: string = this.rootUrl + MethodName;
    return this.http.post<any>(url, data);
  }

  register(data: RegisterRequest): Observable<any> {
    const url: string = `${this.rootUrl}register`;
    return this.http.post<any>(url, data);
  }
  ForgotPassword(data: ForgotPasswordRequest) {
    if (data) data['side'] = 'api';
    const MethodName: string = 'password/reset';
    const url: string = this.rootUrl + MethodName;
    return this.http.post<any>(url, data);
  }

  ResetPassword(data: ResetPasswordRequest) {
    const MethodName: string = 'password/token';
    const url: string = this.rootUrl + MethodName;
    return this.http.post<any>(url, data);
  }
}
