import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   public logo: any = '';
  constructor() { }

  ngOnInit() {
    this.logo = '../../../assets/dmi.gif';
  }

}
