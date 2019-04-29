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
  establishments: any;
  public categorie;
  public estaDefault;
  public estaCategorie;
  public estaSearch;
  public research: string ;

  constructor(private service: EstablishmentService, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const categorie = params.get('categorie');
      this.categorie = categorie;
      const search = params.get('search');
      if (search) {
        this.research = search;
        this.research = this.research.toLowerCase();
      }
      if (this.research !== undefined) {
        this.estaDefault = true;
        this.estaCategorie = true;
      }
      console.log(this.research);
    },
  );
    this.service.getAllEstablishment().subscribe(
      (etam) => {
        this.establishments = etam;
        this.tableEstablishment = this.establishments;
        console.log(this.establishments);
      });
    console.log(this.categorie);
    console.log(this.estaDefault);
    console.log(this.estaCategorie);

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
