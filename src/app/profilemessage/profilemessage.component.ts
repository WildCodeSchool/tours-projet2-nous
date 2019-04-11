import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profilemessage',
  templateUrl: './profilemessage.component.html',
  styleUrls: ['./profilemessage.component.css']
})
export class ProfilemessageComponent implements OnInit {
  public myForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      from: [''],
      to: [''],
      read: [''],
      reason: [''],
      owner: [''],
    })
  }
  submit()
  {}

}
