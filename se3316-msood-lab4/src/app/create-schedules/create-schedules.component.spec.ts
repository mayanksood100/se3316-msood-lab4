import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchedulesComponent } from './create-schedules.component';

describe('CreateSchedulesComponent', () => {
  let component: CreateSchedulesComponent;
  let fixture: ComponentFixture<CreateSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
