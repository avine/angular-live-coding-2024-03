import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from '../counter/counter.component';
import { NumberParityComponent } from './number-parity.component';

describe('NumberParityComponent', () => {
  let component: NumberParityComponent;
  let fixture: ComponentFixture<NumberParityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberParityComponent, CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberParityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be even', () => {
    const de = fixture.debugElement.query(By.css('[test-id="parity"]'));

    expect((de.nativeElement as HTMLElement).textContent).toContain('is even');
  });

  it('should be odd when clicking on counter button', () => {
    const counter: CounterComponent = fixture.debugElement.query(By.directive(CounterComponent)).componentInstance;

    // When
    counter.increment();
    fixture.detectChanges();

    // Then
    const de = fixture.debugElement.query(By.css('[test-id="parity"]'));
    expect((de.nativeElement as HTMLElement).textContent).toContain('is odd');
  });
});
