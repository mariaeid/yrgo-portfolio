import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [MenuComponent, HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [CommonModule, MenuComponent, HeaderComponent]
})
export class SharedModule {}
