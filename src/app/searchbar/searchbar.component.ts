import { Component, OnInit } from '@angular/core';

import { EstablishmentService } from '../common/services/establishment.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],

})


export class SearchbarComponent implements OnInit {

  constructor(public service :EstablishmentService) {
  }

  public inputText :string;


  ngOnInit() {
  }
  // tslint:disable-next-line: variable-name
  public data1: string[] = ['1', '2', '3', '4', '5', '6', '7+'];
  // set placeholder text to DropDownList input element
  public placeholder: string = 'Number of persons';

  search(){
    this.service.research(this.inputText);
  }
}
