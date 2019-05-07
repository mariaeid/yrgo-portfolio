import { Component, OnInit } from '@angular/core';

import { HeaderService } from './../../core/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public content;

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.content = this.headerService.fetch();
  }

}
