import { Component, OnInit, Input } from '@angular/core';
import { EstablishmentService } from '../common/services/establishment.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() cat:[];
  @Input() categorie: string;
  @Input() path: string;
  @Input() photo: string;
  @Input() code: string;

  constructor() { }

  ngOnInit() {
    console.log();
  }
}
