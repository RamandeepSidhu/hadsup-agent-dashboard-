import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShimmerBoxComponent } from './components/shimmer-box/shimmer-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ShimmerBoxComponent,
    FooterComponent,
    NavBarComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  exports: [FooterComponent,NavBarComponent,LoginComponent,RegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
