import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment16julyComponent } from './assignment16july.component';

describe('Assignment16julyComponent', () => {
  let component: Assignment16julyComponent;
  let fixture: ComponentFixture<Assignment16julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment16julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment16julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
