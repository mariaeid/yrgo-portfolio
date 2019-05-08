import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { CasesComponent } from './cases/cases.component';

@NgModule({
  declarations: [MenuComponent, HeaderComponent, CasesComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [CommonModule, MenuComponent, HeaderComponent, CasesComponent]
})
export class SharedModule {}
