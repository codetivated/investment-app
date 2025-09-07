import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultData } from '../../models/result-data.model';

@Component({
  selector: 'app-investment-results-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results-table.component.html',
  styleUrl: './investment-results-table.component.css'
})
export class InvestmentResultsTableComponent {
  @Input({ required: true }) results!: ResultData[];
}
