import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../common/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(public authenticationService: AuthenticationService) { }
  isCollapsed: boolean = true;
  ngOnInit() {
  }
  logout(){
    this.authenticationService.logout();
  }
}
 

