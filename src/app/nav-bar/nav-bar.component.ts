import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../common/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public resultLog;
  navbarOpen = false;

  constructor(public authenticationService: AuthenticationService) { }
  isCollapsed: boolean = true;
  ngOnInit() {
    this.resultLog = this.authenticationService.isLogin();
  }

  logout() {
    this.authenticationService.logout();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
