import { CasesService } from './cases.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderService } from './header.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [HeaderService, CasesService],
  exports: [HttpClientModule]
})
export class CoreModule {}
