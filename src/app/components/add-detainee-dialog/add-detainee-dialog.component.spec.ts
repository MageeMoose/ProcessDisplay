import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetaineeDialogComponent } from './add-detainee-dialog.component';

describe('AddDetaineeDialogComponent', () => {
  let component: AddDetaineeDialogComponent;
  let fixture: ComponentFixture<AddDetaineeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetaineeDialogComponent]
    });
    fixture = TestBed.createComponent(AddDetaineeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
