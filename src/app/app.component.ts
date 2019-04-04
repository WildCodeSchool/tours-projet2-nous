import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tours-projet2-nous';
  categories = ['burger', 'pizza', 'gastro', 'chinese', 'steackhouse', 'fishes'];
  myCat = this.categories[0];
}
