import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment15julyComponent } from './assignment15july.component';

describe('Assignment15julyComponent', () => {
  let component: Assignment15julyComponent;
  let fixture: ComponentFixture<Assignment15julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment15julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment15julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
