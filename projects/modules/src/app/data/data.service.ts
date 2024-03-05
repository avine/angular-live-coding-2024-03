import { signal } from '@angular/core';

export class DataService {
  private _count = signal<number>(0);

  count = this._count.asReadonly();

  increment() {
    this._count.update((count) => count + 1);
  }
}

export const DataAltService = DataService;
