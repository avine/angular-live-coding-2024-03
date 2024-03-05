import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NumberParityComponent } from './number-parity.component';

describe('NumberParityComponent2', () => {
  let component: NumberParityComponent;
  let fixture: ComponentFixture<NumberParityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberParityComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  it('should bind 0 to counter', () => {
    expect(fixture.debugElement.query(By.css('[test-id="counter"]')).properties['count']).toBe(0);
  });

  it('should be odd when counter component emit 1', () => {
    fixture.debugElement.query(By.css('[test-id="counter"]')).triggerEventHandler('countChange', 1);

    // When
    fixture.detectChanges();

    // Then
    const de = fixture.debugElement.query(By.css('[test-id="parity"]'));
    expect((de.nativeElement as HTMLElement).textContent).toContain('is odd');
  });
});
