import { Component } from '@angular/core';
import { MessageService } from './common/services/message.service';
;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'tours-projet2-nous';
  categories = ['burger', 'pizza', 'gastro', 'chinese', 'steackhouse', 'fishes'];
  myCat = this.categories[0];

  private  service:MessageService;
  constructor(PARAM_SERVICE:MessageService) {
    // le service est stocké dans PARAM_SERVICE
    this.service  =  PARAM_SERVICE;
  }
  
  public ngOnInit() {}
}
