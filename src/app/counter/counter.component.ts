import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div>
      <h2>Counter: {{ counterService.count() }}</h2>
      <button (click)="counterService.increment()">Increment</button>
      <button (click)="counterService.decrement()">Decrement</button>
      <button (click)="counterService.reset()">Reset</button>
    </div>
  `
})
export class CounterComponent {
  counterService = inject(CounterService);
}
