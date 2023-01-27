import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesignupComponent } from './purchasesignup.component';

describe('PurchasesignupComponent', () => {
  let component: PurchasesignupComponent;
  let fixture: ComponentFixture<PurchasesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
