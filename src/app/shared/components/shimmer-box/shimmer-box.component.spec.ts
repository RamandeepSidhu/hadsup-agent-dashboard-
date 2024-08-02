import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerBoxComponent } from './shimmer-box.component';

describe('ShimmerBoxComponent', () => {
  let component: ShimmerBoxComponent;
  let fixture: ComponentFixture<ShimmerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShimmerBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
