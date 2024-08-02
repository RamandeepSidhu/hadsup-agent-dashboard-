export interface LoginRequest {
    username: string;
    password: string;
    scopes?: string[];
  }
  
  export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    scopes?: string[];
  }
  
  export interface ForgotPasswordRequest {
    email: string;
    side?: string;
  }
  
  export interface ResetPasswordRequest {
    token: string;
    newPassword: string;
  }
  
  export interface AuthResponse {
    token: string;
    refreshToken: string;
    user: any;
  }
  