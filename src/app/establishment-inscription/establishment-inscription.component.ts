import { Component, OnInit } from '@angular/core';
import { Establishment } from '../common/models/establishment.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EstablishmentService } from '../common/services/establishment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-establishment-inscription',
  templateUrl: './establishment-inscription.component.html',
  styleUrls: ['./establishment-inscription.component.css'],
})
export class EstablishmentInscriptionComponent implements OnInit {
  public establishmentForm: FormGroup;
  public establishment: Establishment;
  public id;

  constructor(private fb: FormBuilder,
              private service: EstablishmentService,
              public activatedRoute: ActivatedRoute) {

    this.establishmentForm = this.fb.group({
      name: [''],
      type: [''],
      address: this.fb.group({
        number: [''],
        street: [''],
        city: [''],
        zipCode: [''],
      }),
      description: [''],
      contact: this.fb.group({
        phone: [''],
        email: [''],
        site: [''],
      }),
      networks: this.fb.group({
        name: [''],
        link: [''],
      }),
      medias: this.fb.group({
        url: [''],
        order: [''],
      }),
      profile: [''],
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.id = id;
      if (id) {
        this.service.getEstablishment(id).subscribe(
      (establishment: Establishment) => {
        this.establishment = establishment;
        this.establishmentForm.patchValue(establishment);
// tslint:disable-next-line: brace-style
      }); } else {
        const etablissementId = params.get('etablissementId');
        this.service.getEstablishment(etablissementId).subscribe(
        (establishment: Establishment) => {
          this.establishment = establishment;
          this.establishmentForm.patchValue(establishment);
        });
      }
    },
    );
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.id, this.establishmentForm.value).subscribe(
    (establishment: Establishment) => {
      this.establishment = establishment;
      this.establishmentForm.patchValue(establishment);
// tslint:disable-next-line: brace-style
    }); }else {
      this.service.create(this.establishmentForm.value).subscribe(
      (establishment: Establishment) => {
        this.establishment = establishment;
        this.establishmentForm.patchValue(establishment);
// tslint:disable-next-line: brace-style
      }); }
  }

}
