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
  public profile: FormGroup;

  constructor(private fb: FormBuilder,
              private service: ProfileService,
              public activetedroute: ActivatedRoute) {

    this.profile = this.fb.group({
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
        this.profile.patchValue(profile);
      },
    );
  }

  submit() {
    this.service.update(this.profile.value).subscribe(
      (profile: Profile) => {
        this.profile.patchValue(profile);
      },
    );
  }
}
