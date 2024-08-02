import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAgentOverviewComponent } from './sale-agent-overview.component';

describe('SaleAgentOverviewComponent', () => {
  let component: SaleAgentOverviewComponent;
  let fixture: ComponentFixture<SaleAgentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaleAgentOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleAgentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
