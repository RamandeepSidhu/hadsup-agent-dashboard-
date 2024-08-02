import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleAgentOverviewComponent } from './sale-agent-overview/sale-agent-overview.component';
import { AdvertiserListComponent } from './advertiser-list/advertiser-list.component';
import { AddAdvertiseComponent } from './advertiser-list/add-advertise/add-advertise.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: SaleAgentOverviewComponent },
  { path: 'advertiser', component: AdvertiserListComponent },
  { path: 'add-advertiser', component: AddAdvertiseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesAgentRoutingModule {}
