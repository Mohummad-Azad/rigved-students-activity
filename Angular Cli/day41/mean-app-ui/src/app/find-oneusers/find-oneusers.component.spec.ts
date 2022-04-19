import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOneusersComponent } from './find-oneusers.component';

describe('FindOneusersComponent', () => {
  let component: FindOneusersComponent;
  let fixture: ComponentFixture<FindOneusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindOneusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOneusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
