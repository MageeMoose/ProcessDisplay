import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomlistSectionOneComponent } from './roomlist-section-one.component';

describe('RoomlistSectionOneComponent', () => {
  let component: RoomlistSectionOneComponent;
  let fixture: ComponentFixture<RoomlistSectionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomlistSectionOneComponent]
    });
    fixture = TestBed.createComponent(RoomlistSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
