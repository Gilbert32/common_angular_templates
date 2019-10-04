import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hackathon-app';
  // @ViewChild('sideNav' , {static: false}) public sideNav: MatSidenav;
  constructor(private router: Router) {}
  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (this.sideNav) {
    //     this.sideNav.close();
    //   }
    // });
  }
}
