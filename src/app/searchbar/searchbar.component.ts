import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})

export class SearchbarComponent implements OnInit {
  public minDate: Date = new Date('8/3/2017 9:00 AM');
  public maxDate: Date = new Date('8/3/2017 1:30 PM');
  public dateValue: Date = new Date('8/3/2017 10:00 AM');

  constructor() { }

  ngOnInit() {
  }

}
