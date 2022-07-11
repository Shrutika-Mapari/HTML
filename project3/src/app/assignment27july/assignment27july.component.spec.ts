import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment27julyComponent } from './assignment27july.component';

describe('Assignment27julyComponent', () => {
  let component: Assignment27julyComponent;
  let fixture: ComponentFixture<Assignment27julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment27julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment27julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
