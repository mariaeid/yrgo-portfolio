import { Component, OnInit } from '@angular/core';
import { CasesService } from '../../core/cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.sass']
})
export class CasesComponent implements OnInit {
  public loaded = false;
  public cases;

  constructor(private casesService: CasesService) {}

  ngOnInit() {
    this.casesService.fetch().subscribe(cases => {
      this.loaded = true;
      this.cases = cases;
    });
  }
}
