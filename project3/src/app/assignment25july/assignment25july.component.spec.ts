import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment25julyComponent } from './assignment25july.component';

describe('Assignment25julyComponent', () => {
  let component: Assignment25julyComponent;
  let fixture: ComponentFixture<Assignment25julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment25julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment25julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
