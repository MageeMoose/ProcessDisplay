import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomlistSectionTwoComponent } from './roomlist-section-two.component';

describe('RoomlistSectionTwoComponent', () => {
  let component: RoomlistSectionTwoComponent;
  let fixture: ComponentFixture<RoomlistSectionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomlistSectionTwoComponent]
    });
    fixture = TestBed.createComponent(RoomlistSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
