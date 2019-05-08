import { Component, OnInit } from '@angular/core';

import { HeaderService } from './../../core/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public loaded = false;
  public content;

  constructor(public headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.fetch().subscribe(data => {
      this.loaded = true;
      this.content = data;
    });
  }
}
