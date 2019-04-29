import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../common/services/establishment.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent implements OnInit {
  categories = ['Burger', 'Pizza', 'French food', 'Chinese food', 'Vegan', 'Ocean food'];
  myCat = this.categories[0];
  constructor(private service: EstablishmentService) { }

  ngOnInit() {
  }

}
