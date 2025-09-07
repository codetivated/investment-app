import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResultsTableComponent } from './investment-results-table.component';

describe('InvestmentResultsTableComponent', () => {
  let component: InvestmentResultsTableComponent;
  let fixture: ComponentFixture<InvestmentResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentResultsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
