import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ExampleComponent],
  imports: [CommonModule],
  exports: [CommonModule, ExampleComponent]
})
export class SharedModule {}
