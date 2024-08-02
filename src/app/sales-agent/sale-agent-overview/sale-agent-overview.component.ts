import { Component } from '@angular/core';

@Component({
  selector: 'hadsup-sale-agent-overview',
  templateUrl: './sale-agent-overview.component.html',
  styleUrl: './sale-agent-overview.component.scss'
})
export class SaleAgentOverviewComponent {
  ngOnInit(): void {
    this.earnings;
  }
  earnings:any= [
    { visual: '../../../assets/images/Renuar.png', advertiserName: 'Renuar', runningDates: '07/05/2024 - 28/05/2024', earningPercentage: 10, commissionEarned: '£1,250.00' },
    { visual: '../../../assets/images/Renuar2.png', advertiserName: 'Renuar', runningDates: '16/08/2024 - 29/08/2024', earningPercentage: 5, commissionEarned: '£250.70' },
    { visual: '../../../assets/images/american-eagle.png', advertiserName: 'American Eagle', runningDates: '28/10/2024 - 28/11/2024', earningPercentage: 7, commissionEarned: '£269.00' },
    { visual: '../../../assets/images/zara.png', advertiserName: 'Zara', runningDates: '12/06/2024 - 27/06/2024', earningPercentage: 2, commissionEarned: '£630.40' },
    { visual: '../../../assets/images/Renuar.png', advertiserName: 'Stradivarius', runningDates: '16/08/2024 - 30/08/2024', earningPercentage: 11, commissionEarned: '£9.03' },
    { visual: '../../../assets/images/Renuar2.png', advertiserName: 'H&M', runningDates: '12/06/2024 - 12/07/2024', earningPercentage: 7, commissionEarned: '£70.00' },
    { visual: '../../../assets/images/zara.png', advertiserName: 'Bershka', runningDates: '07/05/2024 - 07/08/2024', earningPercentage: 1, commissionEarned: '£234.00' },
    { visual: '../../../assets/images/american-eagle.png', advertiserName: 'American Eagle', runningDates: '15/08/2024 - 15/11/2024', earningPercentage: 7, commissionEarned: '£214.00' },
    { visual: '../../../assets/images/Renuar.png', advertiserName: 'H&M', runningDates: '18/09/2024 - 18/10/2024', earningPercentage: 3, commissionEarned: '£450.03' },
  ];
  constructor() {}

}
