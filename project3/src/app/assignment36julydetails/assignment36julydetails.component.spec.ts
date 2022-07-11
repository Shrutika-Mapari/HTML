import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment36julydetailsComponent } from './assignment36julydetails.component';

describe('Assignment36julydetailsComponent', () => {
  let component: Assignment36julydetailsComponent;
  let fixture: ComponentFixture<Assignment36julydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment36julydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment36julydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
