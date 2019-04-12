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
  private service: ProfileService;
// tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder,
              PARAM_SERVICE: ProfileService,
              public activetedroute: ActivatedRoute) {
    this.service = PARAM_SERVICE;

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
    this.service.getProfile().subscribe(
      (PARAM_PROFIL: Profile) => {
        this.profil = PARAM_PROFIL;
        console.log(PARAM_PROFIL);
        this.myForm.patchValue(PARAM_PROFIL);
      },
    );
  }

  submit() {
    console.log(this.myForm.valid);
  }
}
