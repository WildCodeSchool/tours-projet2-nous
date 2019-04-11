import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentInscriptionComponent } from './establishment-inscription.component';

describe('EstablishmentInscriptionComponent', () => {
  let component: EstablishmentInscriptionComponent;
  let fixture: ComponentFixture<EstablishmentInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
