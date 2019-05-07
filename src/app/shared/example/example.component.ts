import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.sass']
})
export class ExampleComponent implements OnInit {
  public title = 'Example title';

  constructor() {}

  ngOnInit() {}
}
