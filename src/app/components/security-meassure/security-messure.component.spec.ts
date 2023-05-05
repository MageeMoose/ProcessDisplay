import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityMessureComponent } from './security-messure.component';

describe('SecurityMessureComponent', () => {
  let component: SecurityMessureComponent;
  let fixture: ComponentFixture<SecurityMessureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityMessureComponent]
    });
    fixture = TestBed.createComponent(SecurityMessureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
