import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountVacancySectionOneComponent } from './count-vacancy-section-one.component';

describe('CountVacancySectionOneComponent', () => {
  let component: CountVacancySectionOneComponent;
  let fixture: ComponentFixture<CountVacancySectionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountVacancySectionOneComponent]
    });
    fixture = TestBed.createComponent(CountVacancySectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
