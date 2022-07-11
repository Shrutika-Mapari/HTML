import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment17julyComponent } from './assignment17july.component';

describe('Assignment17julyComponent', () => {
  let component: Assignment17julyComponent;
  let fixture: ComponentFixture<Assignment17julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment17julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment17julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
