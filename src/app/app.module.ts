import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesAgentModule } from './sales-agent/sales-agent.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SalesAgentModule,
    SharedModule
  ],
  exports:[SalesAgentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
