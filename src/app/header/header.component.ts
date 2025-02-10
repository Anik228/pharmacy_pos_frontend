import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ImagePath: string = 'assets/images/pharmacy.jpg';

  constructor() { }

  ngOnInit(): void {
  }
}
