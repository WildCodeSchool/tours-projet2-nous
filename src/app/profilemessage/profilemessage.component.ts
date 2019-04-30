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
  public message: FormGroup;

  constructor(private fb: FormBuilder,
              public service: MessageService,
              public activatedRoute: ActivatedRoute) {
    this.message = this.fb.group({
      from: [''],
      to: [''],
      message: [''],
    });

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.service.getMessage(id).subscribe(
          (message: Message) => {
            this.message.patchValue(message);
          });
      }
    });
  }

  onSubmit() {
    this.service.postMessage(this.message.value).subscribe(
      (message: Message) => {
        this.message.patchValue(message);
      });
  }
}
