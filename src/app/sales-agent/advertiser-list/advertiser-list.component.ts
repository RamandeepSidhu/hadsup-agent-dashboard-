import { Component } from '@angular/core';

@Component({
  selector: 'hadsup-advertiser-list',
  templateUrl: './advertiser-list.component.html',
  styleUrl: './advertiser-list.component.scss'
})
export class AdvertiserListComponent {
  ngOnInit(): void {
    this.earnings;
  }
  earnings: any = [
    {
      advertiserName: 'Renuar',
      runningDates: '07/05/2024 - 28/05/2024',
      earningPercentage: 10,
      commissionEarned: '£1,250.00',
      totalCampaigns: '92',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'Renuar',
      runningDates: '16/08/2024 - 29/08/2024',
      earningPercentage: 5,
      commissionEarned: '£250.70',
      totalCampaigns: '922',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'American Eagle',
      runningDates: '28/10/2024 - 28/11/2024',
      earningPercentage: 7,
      commissionEarned: '£269.00',
      totalCampaigns: '802',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'Zara',
      runningDates: '12/06/2024 - 27/06/2024',
      earningPercentage: 2,
      commissionEarned: '£630.40',
      totalCampaigns: '922',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'Stradivarius',
      runningDates: '16/08/2024 - 30/08/2024',
      earningPercentage: 11,
      commissionEarned: '£9.03',
      totalCampaigns: '922',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'H&M',
      runningDates: '12/06/2024 - 12/07/2024',
      earningPercentage: 7,
      commissionEarned: '£70.00',
      totalCampaigns: '922',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'Bershka',
      runningDates: '07/05/2024 - 07/08/2024',
      earningPercentage: 1,
      commissionEarned: '£234.00',
      totalCampaigns: '922',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'American Eagle',
      runningDates: '15/08/2024 - 15/11/2024',
      earningPercentage: 7,
      commissionEarned: '£214.00',
      totalCampaigns: '922',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
    {
      advertiserName: 'H&M',
      runningDates: '18/09/2024 - 18/10/2024',
      earningPercentage: 3,
      commissionEarned: '£450.03',
      totalCampaigns: '922',
      location: '2464 Royal Ln. Mesa, New Jersey 45463',
    },
  ];
  constructor() {}
}
