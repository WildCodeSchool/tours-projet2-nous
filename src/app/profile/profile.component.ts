import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(){

    this.myForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      siret: [''],
      siren: [''],
      key: [''],
      address:this.fb.group({
        street: [''],
        zipCode: [''],
        city: [''],
        number: ['']
      }),
      contact:this.fb.group({
        fax: [''],
        phone: [''],
        email: ['']
      })

      
    })
    
  }
  submit(){
    console.log(this.myForm.valid)
  }
}
