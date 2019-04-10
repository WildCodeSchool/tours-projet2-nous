import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent implements OnInit {
  categories = ['burger', 'pizza', 'french food', 'chinese food', 'steackhouse', 'ocean food'];
  myCat = this.categories[0];
  constructor() { }

  ngOnInit() {
  }

}
