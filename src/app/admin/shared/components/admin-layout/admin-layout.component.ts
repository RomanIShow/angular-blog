import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServices} from '../../services/auth.services';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less']
})
export class AdminLayoutComponent implements OnInit {
  active: any;

  constructor(
    private router: Router,
    public auth: AuthServices
  ) { }

  ngOnInit() {
  }
  logout(event: Event) {
    event.preventDefault();
    // Программная навигация
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
