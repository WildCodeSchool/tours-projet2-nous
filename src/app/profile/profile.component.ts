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
      username: new FormControl('',),
      email:  new FormControl(''),
      password: new FormControl(''),
      
    })
    
  }
  submit(){
    console.log(this.myForm.valid)
  }
}
