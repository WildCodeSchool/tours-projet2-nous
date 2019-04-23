import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-list-establischment',
  templateUrl: './detail-list-establischment.component.html',
  styleUrls: ['./detail-list-establischment.component.css'],
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
})
export class DetailListEstablischmentComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit() {
  }

}
