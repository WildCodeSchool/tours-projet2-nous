import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBookingComponent } from './liste-booking.component';

describe('ListeBookingComponent', () => {
  let component: ListeBookingComponent;
  let fixture: ComponentFixture<ListeBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
