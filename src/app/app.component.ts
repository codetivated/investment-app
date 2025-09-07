import { Component, Input } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultsService } from './services/investment-results.service';
import { UserInput } from './models/user-input.model';
import { InvestmentResultsTableComponent } from './components/investment-results-table/investment-results-table.component';
import {ResultData} from './models/result-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsTableComponent, CommonModule],
})
export class AppComponent {
  results: ResultData[] = [];

  constructor(private investmentResultsService: InvestmentResultsService) {}


onSendUserInput(userInput: UserInput) {
  const results = this.investmentResultsService.calculateInvestmentResults(userInput);
  this.results = results;
  console.log('Calculated results:', results);
}

onResetForm() {
  this.results = [];
}
}
