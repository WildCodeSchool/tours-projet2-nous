import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Booking } from '../common/models/booking-model';
import { BookingService } from '../common/services/booking.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EstablishmentService } from '../common/services/establishment.service';

@Component({
  selector: 'app-booking-forms',
  templateUrl: './booking-forms.component.html',
  styleUrls: ['./booking-forms.component.css'],
})
export class BookingFormsComponent implements OnInit {
  public booking: FormGroup;
  public id: string;
  public date;
  public nbPersonne;


  constructor(public service: BookingService, public formBuilder: FormBuilder,
              public activetedroute: ActivatedRoute,
              public establishmentService: EstablishmentService) {

    this.booking = this.formBuilder.group({
      date: this.formBuilder.group({
        start: [''],
        end: [''],
      }),
      owner: this.formBuilder.group({
        name: [''],
        address: this.formBuilder.group({
          street: [''],
          zipCode: [''],
          city: [''],
          number: [''],
        }),
        contact: this.formBuilder.group({
          phone: [''],
          email: [''],
        }),
      }),
      numbers: [''],
      establishment: [''],
    });
  }

  ngOnInit() {
    this.activetedroute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.id = id;
      const establishment = params.get('establishment');
      this.booking.get('establishment').patchValue(establishment);
      if (id) {
        this.service.getBoockingForm(id).subscribe(
          (booking: Booking) => {
            this.booking.patchValue(booking);
          });
      }
      this.date = `${this.establishmentService.date.day}/${this.establishmentService.date.month}/${this.establishmentService.date.year}`;
      this.nbPersonne = this.establishmentService.nbPersonne;
    });
  }

  submit() {
    if (this.id) {
      this.service.update(this.booking.value, this.id).subscribe(
          (booking: Booking) => {
            this.booking.patchValue(booking);
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log(`Erreur ! : ${error}`);
          },
        );
    } else {
      this.service.create(this.booking.value).subscribe(
          (booking: Booking) => {
            this.booking.patchValue(booking);
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log(`Erreur ! : ${error}`);
          },
        );
    }
  }
}
