import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadServers(id: number) {
    console.log('exe onLoadServers()');
    // complex calculation
    // access backend server
    // store the servers array
    // TODO: reaccess back the root route
    // have access to the Angular 'router'
    // so invoke .navigate()
    this.router.navigate(
      ['/servers', id, 'edit'], 
      { 
        queryParams: {allowEdit: '1'},
        fragment: 'loading'
      });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logOut();
  }
}
