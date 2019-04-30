import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentService } from '../common/services/establishment.service';
import { Establishment } from '../common/models/establishment.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingService } from '../common/services/booking.service';

@Component({
  selector: 'app-detail-list-establischment',
  templateUrl: './detail-list-establischment.component.html',
  styleUrls: ['./detail-list-establischment.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class DetailListEstablischmentComponent implements OnInit {
  public description;
  public comments;
  public menus;
  public name;
  public time;
  public messageForm;
  public commentForm: FormGroup;

  public id;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  establishment: Establishment;
  public images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`,
  );

  // tslint:disable-next-line: max-line-length
  constructor(
    public serv: BookingService,
    public service: EstablishmentService,
    public activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
  ) {
    this.commentForm = this.fb.group({
      name: [''],
      comment: [''],
    });
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.id = id;
      this.service
        .getEstablishment(this.id)
        .subscribe((establishment: Establishment) => {
          this.establishment = establishment;
          this.description = establishment.description;
          this.name = establishment.name;
          this.time = establishment.time;
          this.comments = establishment.comments;
          this.menus = establishment.menus;
        });
    });
  }

  onSubmit() {
    this.establishment.comments.push(this.commentForm.value);
    this.service
      .update(this.id, this.establishment)
      .subscribe((establishment: Establishment) => {
        this.comments = establishment.comments;
      });
  }
}
