import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../common/services/establishment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Establishment } from '../common/models/establishment.model';

@Component({
  selector: 'app-list-establishment',
  templateUrl: './list-establishment.component.html',
  styleUrls: ['./list-establishment.component.css'],
})
export class ListEstablishmentComponent implements OnInit {
  public tableEstablishment: [];
  public listEstablishment;

  constructor(private service: EstablishmentService, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.service.getListEstablishment().subscribe(
      (etam) => {
        this.listEstablishment = etam;
        this.tableEstablishment = this.listEstablishment;
        console.log(this.listEstablishment);
      });
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
  etaDetail(id) {
    this.service.id = id;
  }
}
