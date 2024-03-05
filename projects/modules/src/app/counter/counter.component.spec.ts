import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    // Given
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 0', () => {
    // Class testing
    expect(component.count).toBe(0);

    // DOM testing
    expect((fixture.nativeElement as HTMLElement).querySelector('button')?.textContent).toContain('0');
  });

  it('should increment', () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');

    // When
    button?.click();
    fixture.detectChanges();

    // Then
    expect(component.count).toBe(1);
    expect(button?.textContent).toContain('1');
  });

  it('should emit change', () => {
    const countChangeSpy = spyOn(component.countChange, 'emit');

    const button = (fixture.nativeElement as HTMLElement).querySelector('button');

    // When
    button?.click();

    // Then
    expect(countChangeSpy).toHaveBeenCalledWith(1);
  });
});
