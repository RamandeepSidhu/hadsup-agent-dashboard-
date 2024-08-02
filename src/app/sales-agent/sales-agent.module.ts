import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAdvertiseComponent } from './advertiser-list/add-advertise/add-advertise.component';
import { AdvertiserListComponent } from './advertiser-list/advertiser-list.component';
import { SaleAgentOverviewComponent } from './sale-agent-overview/sale-agent-overview.component';
import { SalesAgentRoutingModule } from './sales-agent-routing.module';
import { SalesAgentComponent } from './sales-agent.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SalesAgentComponent,
    SaleAgentOverviewComponent,
    AdvertiserListComponent,
    AddAdvertiseComponent,
  ],
  imports: [
    CommonModule,
    SalesAgentRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SalesAgentModule { }
