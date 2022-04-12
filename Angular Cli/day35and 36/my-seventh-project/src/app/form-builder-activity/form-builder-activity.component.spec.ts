import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderActivityComponent } from './form-builder-activity.component';

describe('FormBuilderActivityComponent', () => {
  let component: FormBuilderActivityComponent;
  let fixture: ComponentFixture<FormBuilderActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
