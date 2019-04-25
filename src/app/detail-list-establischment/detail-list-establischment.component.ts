import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentService } from '../common/services/establishment.service';
import { Establishment } from '../common/models/establishment.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookingService } from '../common/services/booking.service';

@Component({
  selector: 'app-detail-list-establischment',
  templateUrl: './detail-list-establischment.component.html',
  styleUrls: ['./detail-list-establischment.component.css'],
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
})
export class DetailListEstablischmentComponent implements OnInit {
  public description;
  public comments;
  public menus;
  public name;
  public time;
  public id;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  establishment: Establishment;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

// tslint:disable-next-line: max-line-length
  constructor(config: NgbCarouselConfig, public serv: BookingService, public service: EstablishmentService, public activatedRoute: ActivatedRoute) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.id = id;
      console.log(id);
      this.service.getEstablishment(this.service.id).subscribe(
      (establishment: Establishment) => {
        this.establishment = establishment;
        this.description = establishment.description;
        this.name = establishment.name;
        this.time = establishment.time;
        this.comments = establishment.comments;
        this.menus = establishment.menus;
      });
    }
    )
  }
}
