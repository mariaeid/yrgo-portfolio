import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-code',
  templateUrl: './live-code.component.html',
  styleUrls: ['./live-code.component.sass']
})
export class LiveCodeComponent implements OnInit {

  public text: string = 'From component.';

  constructor() { }

  ngOnInit() {
  }

}
