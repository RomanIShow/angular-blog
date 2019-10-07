import { Component, OnInit } from '@angular/core';
import {AuthServices} from '../shared/components/services/auth.services';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.less']
})
export class DashboardPageComponent implements OnInit {

  constructor(private auth: AuthServices) { }

  ngOnInit() {
  }
  test() {
    console.log(this.auth.token);
  }
}
