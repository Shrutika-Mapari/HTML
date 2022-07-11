import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment46julyComponent } from './assignment46july.component';

describe('Assignment46julyComponent', () => {
  let component: Assignment46julyComponent;
  let fixture: ComponentFixture<Assignment46julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment46julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment46julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
