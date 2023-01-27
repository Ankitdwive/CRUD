import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DooterComponent } from './dooter.component';

describe('DooterComponent', () => {
  let component: DooterComponent;
  let fixture: ComponentFixture<DooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
