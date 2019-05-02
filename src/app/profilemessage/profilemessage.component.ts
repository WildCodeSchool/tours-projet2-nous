import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  public trueMessage: boolean = false;

  constructor(private fb: FormBuilder,
              public service: MessageService,
              public activatedRoute: ActivatedRoute) {
    this.message = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      message: ['', Validators.required],
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

  submit() {
    if(this.message.valid){
      this.service.postMessage(this.message.value).subscribe(
        (message: Message) => {
          this.message.patchValue(message);
          this.trueMessage = true;
        });
    }
  }
}
