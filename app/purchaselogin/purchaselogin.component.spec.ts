import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseloginComponent } from './purchaselogin.component';

describe('PurchaseloginComponent', () => {
  let component: PurchaseloginComponent;
  let fixture: ComponentFixture<PurchaseloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
