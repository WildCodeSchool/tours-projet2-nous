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
  public establishments: [];
  public listEstablishment;
  public messages: [];
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
        this.establishments = this.listEstablishment;
        console.log(this.listEstablishment);
      });

    this.message.getListMessage().subscribe(
      (etam) => {
        this.listMessage = etam;
        this.messages = this.listMessage;
        console.log(this.listMessage);
      },
    );

  }
  delete(id, index) {
    this.service.deleteEtablishment(id).subscribe(
            (val) => {
              console.log('DELETE call successful value returned in body',
                          val);
              this.listEstablishment.splice(index, 1);
            },
            (response) => {
              console.log('DELETE call in error', response);
            },
            () => {
              console.log('The DELETE observable is now completed.');
            });
  }
}
