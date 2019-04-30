import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../common/services/establishment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from '../common/services/message.service';
@Component({
  selector: 'app-details-profile',
  templateUrl: './details-profile.component.html',
  styleUrls: ['./details-profile.component.css'],
})
export class DetailsProfileComponent implements OnInit {
  public establishments: any;
  public messages: any;
  constructor(
    private service: EstablishmentService,
    private message: MessageService,
    public activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.service.getListEstablishment().subscribe(
      (establishment) => {
        this.establishments = establishment;

      });

    this.message.getListMessage().subscribe(
      (message) => {
        this.messages = message;
      });
  }

  delete(id, index) {
    this.service.deleteEtablishment(id)
    .subscribe(this.establishments
      .splice(index, 1));

  }
  deleteMessage(id, index) {
    this.message.delMessage(id)
    .subscribe(this.messages
      .splice(index, 1));

  }
}
