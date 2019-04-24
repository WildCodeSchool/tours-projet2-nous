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
  public tableEstablishment: [];
  public listEstablishment;
  public tableMessage: [];
  public listMessage;
  constructor(
    private service: EstablishmentService,
    private message: MessageService,
    public activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.service.getListEstablishment().subscribe(
      (etam) => {
        this.listEstablishment = etam;
        this.tableEstablishment = this.listEstablishment;
        console.log(this.listEstablishment);
      });

    this.message.getListMessage().subscribe(
      (etam) => {
        this.listMessage = etam;
        this.tableMessage = this.listMessage;
        console.log(this.listMessage);
      },
    );

  }
}
