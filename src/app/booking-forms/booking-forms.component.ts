import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Booking } from '../common/models/booking-model';
import { BookingService } from '../common/services/booking.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-booking-forms',
  templateUrl: './booking-forms.component.html',
  styleUrls: ['./booking-forms.component.css'],
})
export class BookingFormsComponent implements OnInit {
  public userForm: FormGroup;
  public bookingForm: Booking;
  title = 'BookingService';
  public id: string;
  constructor(public service: BookingService, public formBuilder: FormBuilder,
              public activetedroute: ActivatedRoute) {

    this.userForm = this.formBuilder.group({
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
      if (id) {
        this.service.getBoockingForm(id).subscribe(
          (booking: Booking) => {
            this.bookingForm = booking;
            this.userForm.patchValue(booking);
            console.log(booking);
          });
      }
    });
  }

  submit() {
    this.activetedroute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.service.update(this.userForm.value, id).subscribe(
          (booking: Booking) => {
            this.bookingForm = booking;
            this.userForm.patchValue(booking);
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log(`Erreur ! : ${error}`);
          },
        );
      } else {
        console.log(this.userForm.value);
        this.service.create(this.userForm.value).subscribe(
          (booking: Booking) => {
            this.bookingForm = booking;
            this.userForm.patchValue(booking);
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log(`Erreur ! : ${error}`);
          },
        );
      }
    });
  }
}
