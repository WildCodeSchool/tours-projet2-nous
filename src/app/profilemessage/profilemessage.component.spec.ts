import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemessageComponent } from './profilemessage.component';

describe('ProfilemessageComponent', () => {
  let component: ProfilemessageComponent;
  let fixture: ComponentFixture<ProfilemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
