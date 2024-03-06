import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedInputsComponent } from './nested-inputs.component';

describe('NestedInputsComponent', () => {
  let component: NestedInputsComponent;
  let fixture: ComponentFixture<NestedInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestedInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
