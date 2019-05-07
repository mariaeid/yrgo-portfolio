import { ExampleService } from './core/example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private exampleServiceservice: ExampleService) {}

  ngOnInit() {
    console.log(
      'Count:',
      this.exampleServiceservice.count(),
      this.exampleServiceservice.count(),
      this.exampleServiceservice.count(),
      this.exampleServiceservice.count(),
      this.exampleServiceservice.count()
    );
  }
}
