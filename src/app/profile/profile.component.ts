import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../common/services/profile.service';
import { Profile } from '../common/models/profile.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  public id: string;
  public myForm: FormGroup;
  public profil: Profile;

  constructor(private fb: FormBuilder,
              private service: ProfileService,
              public activetedroute: ActivatedRoute) {

    this.myForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      siret: [''],
      siren: [''],
      key: [''],
      address: this.fb.group({
        street: [''],
        zipCode: [''],
        city: [''],
        number: [''],
      }),
      contact: this.fb.group({
        fax: [''],
        phone: [''],
        email: [''],
      }),

    });

  }

  ngOnInit() {
    this.service.get().subscribe(
      (profile: Profile) => {
        this.profil = profile;
        console.log(profile);
        this.myForm.patchValue(profile);
      },
    );
  }

  submit() {
    console.log(this.myForm.valid);
    this.service.update(this.myForm.value).subscribe(
      (profile: Profile) => {
        this.profil = profile;
        console.log(profile);
        this.myForm.patchValue(profile);
      },
    );
  }
}
