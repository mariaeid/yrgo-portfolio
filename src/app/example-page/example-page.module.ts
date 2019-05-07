import { ExamplePageComponent } from './example-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ExamplePageComponent],
  imports: [CommonModule, SharedModule]
})
export class ExamplePageModule {}
