import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title1="new user"
  title2="user Friend"
  title3="user Homie"
  constructor() { }

  ngOnInit(): void {
  }

}
