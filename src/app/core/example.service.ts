import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  currentValue = 0;

  constructor() {}

  /**
   * Increment our current value and return it.
   */
  count() {
    this.currentValue++;
    return this.currentValue;
  }
}
