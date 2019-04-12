import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MessageService } from '../common/services/message.service';
import { Message } from '../common/models/message.models';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profilemessage',
  templateUrl: './profilemessage.component.html',
  styleUrls: ['./profilemessage.component.css'],
})
export class ProfilemessageComponent implements OnInit {
  public messageForm: Message;
  public myForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder,
              public service: MessageService,
              public activatedRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      from: [''],
      to: [''],
      read: [''],
      reason: [''],
      owner: [''],
    });

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      this.service.getMessage(id).subscribe(
        (PARAM_MESSAGE: Message) => {
          this.messageForm = PARAM_MESSAGE;
          /// this.myForm.patchValue(pa//message)
          this.myForm.patchValue(PARAM_MESSAGE);
          console.log(PARAM_MESSAGE);
        });
    });
  }
  submit() { }

}
