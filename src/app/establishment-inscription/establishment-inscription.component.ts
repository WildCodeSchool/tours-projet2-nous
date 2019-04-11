import { Component, OnInit } from '@angular/core';
import { Establishment } from '../common/models/establishment.model';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-establishment-inscription',
  templateUrl: './establishment-inscription.component.html',
  styleUrls: ['./establishment-inscription.component.css'],
})
export class EstablishmentInscriptionComponent implements OnInit {

  establishmentForm = this.fb.group({
    name: [''],
    address: this.fb.group({
      number:[''],
      street:[''],
      city:[''],
      zipCode:[''],
    }),
    description:[''],
    contact: this.fb.group({
      phone:[''],
      email:[''],
      site:[''],
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }
}
