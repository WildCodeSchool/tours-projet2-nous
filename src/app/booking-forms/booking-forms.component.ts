import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { booking } from '../common/models/booking-model';
import { BookingService } from '../common/services/booking.service'

@Component({
  selector: 'app-booking-forms',
  templateUrl: './booking-forms.component.html',
  styleUrls: ['./booking-forms.component.css']
})
export class BookingFormsComponent implements OnInit {
  userForm: FormGroup;
  public bookingForm = '';
  title = 'BookingService';
  public service:BookingService;
  
  constructor(param_service:BookingService,public formBuilder: FormBuilder) {  
    this.service  =  param_service;
    this.userForm = this.formBuilder.group({
      date : this.formBuilder.group({
        'dateStart': [''],
        'dateEnd': [''],
      }),
      ownerUserForm : this.formBuilder.group({
        'name': [''],
        adressUserForm : this.formBuilder.group({
          'street': [''],
          'zip': [''],
          'city': [''],
          'numCity': [''],
        }),
        contactUserForm : this.formBuilder.group({
          'phone': [''],
          'email': [''], 
        }),
        'number': [''],
        'establishment': [''],
      })
    })
  }
  
  ngOnInit(){
    this.service.getBoockingForm().subscribe(
      (param_book:string) => {
          this.bookingForm  =  param_book;
          console.log("")})
    console.log(this.userForm.value.ownerUserForm);
  }
  
  submit(){
    console.log(this.userForm.value)
  }
}