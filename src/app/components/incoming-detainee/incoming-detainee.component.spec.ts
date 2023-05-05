import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingDetaineeComponent } from './incoming-detainee.component';

describe('IncomingDetaineeComponent', () => {
  let component: IncomingDetaineeComponent;
  let fixture: ComponentFixture<IncomingDetaineeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomingDetaineeComponent]
    });
    fixture = TestBed.createComponent(IncomingDetaineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
