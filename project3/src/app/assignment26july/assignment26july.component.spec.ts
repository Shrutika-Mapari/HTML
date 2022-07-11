import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment26julyComponent } from './assignment26july.component';

describe('Assignment26julyComponent', () => {
  let component: Assignment26julyComponent;
  let fixture: ComponentFixture<Assignment26julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment26julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment26julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
