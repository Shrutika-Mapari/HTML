import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignmnt36julyComponent } from './assignmnt36july.component';

describe('Assignmnt36julyComponent', () => {
  let component: Assignmnt36julyComponent;
  let fixture: ComponentFixture<Assignmnt36julyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignmnt36julyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignmnt36julyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
