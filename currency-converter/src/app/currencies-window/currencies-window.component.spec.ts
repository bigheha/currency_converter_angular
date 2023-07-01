import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesWindowComponent } from './currencies-window.component';

describe('CurrenciesWindowComponent', () => {
  let component: CurrenciesWindowComponent;
  let fixture: ComponentFixture<CurrenciesWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrenciesWindowComponent]
    });
    fixture = TestBed.createComponent(CurrenciesWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
