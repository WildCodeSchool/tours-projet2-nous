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
  public tableEstablishment;
  establishments;
  public categorie;
  public research: string;
  public search;
  public address = '/establishments/details';

  constructor(private service: EstablishmentService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const categorie = params.get('categorie');
      this.categorie = categorie;
      const search = params.get('search');
      this.search = search;

      this.service.getAllEstablishment().subscribe(
        (etam) => {
          this.establishments = etam;
          this.tableEstablishment = this.establishments;
          console.log(this.establishments);
          this.tableEstablishment = [];
          if (categorie) {
            for (let i = 0; i < this.establishments.length; i += 1) {
              if (this.establishments[i].type === this.categorie) {

                this.tableEstablishment.push(this.establishments[i]);
                console.log(this.establishments);
              }
            }
          }else if (search) {
            for (let i = 0; i < this.establishments.length; i += 1) {
              if (this.establishments[i].name.toLowerCase().includes(search)) {
                this.tableEstablishment.push(this.establishments[i]);
                console.log(this.establishments);
              }
            }
          }else {
            this.establishments = etam;
            this.tableEstablishment = this.establishments;
          }
        },
        );
    },
      );
  }

  delete(id, index) {
    this.service.deleteEtablishment(id).subscribe(
        (val) => {
          console.log('DELETE call successful value returned in body',
                      val);
          this.establishments.splice(index, 1);
        },
        (response) => {
          console.log('DELETE call in error', response);
        },
        () => {
          console.log('The DELETE observable is now completed.');
        });
  }
}
