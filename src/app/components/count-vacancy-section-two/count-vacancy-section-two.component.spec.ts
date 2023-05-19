import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountVacancySectionTwoComponent } from './count-vacancy-section-two.component';

describe('CountVacancySectionTwoComponent', () => {
  let component: CountVacancySectionTwoComponent;
  let fixture: ComponentFixture<CountVacancySectionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountVacancySectionTwoComponent]
    });
    fixture = TestBed.createComponent(CountVacancySectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
