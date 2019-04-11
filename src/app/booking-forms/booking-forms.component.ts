import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { booking } from '../common/models/booking-model'

@Component({
  selector: 'app-booking-forms',
  templateUrl: './booking-forms.component.html',
  styleUrls: ['./booking-forms.component.css']
})
export class BookingFormsComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder) {  
    
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
    console.log(this.userForm.value.ownerUserForm);
  }
  
}
