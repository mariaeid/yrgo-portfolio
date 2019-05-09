import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveCodeComponent } from './live-code/live-code.component';

@NgModule({
  declarations: [ExampleComponent, LiveCodeComponent],
  imports: [CommonModule],
  exports: [CommonModule, ExampleComponent, LiveCodeComponent] //Lägg till LiveCodeComponent i slutet av denna array
})
export class SharedModule {}
