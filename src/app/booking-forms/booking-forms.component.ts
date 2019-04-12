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
  userForm: FormGroup;
  public bookingForm: Booking;
  title = 'BookingService';
  id : string;
  constructor(public service:BookingService,
              public formBuilder: FormBuilder,
              public activetedroute: ActivatedRoute) {

    this.userForm = this.formBuilder.group({
      date : this.formBuilder.group({
        start: [''],
        end: [''],
      }),
      owner : this.formBuilder.group({
        name: [''],
        address : this.formBuilder.group({
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

      this.service.getBoockingForm(id).subscribe(
        (booking: Booking) => {
          this.bookingForm  =  booking;
          this.userForm.patchValue(booking);
          console.log(booking);
        });
    },
        );
  }

  submit() {
    console.log(this.userForm.value);
  }
}
