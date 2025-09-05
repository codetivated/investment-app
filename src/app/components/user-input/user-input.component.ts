import { Component } from '@angular/core';
import {UserInput} from '../../models/user-input.model';
import { EventEmitter, Output } from '@angular/core';
import { signal } from '@angular/core';
import { InvestmentResultsService } from '../../services/investment-results.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

    constructor(private investmentResultsService: InvestmentResultsService) {}

inputData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0
};

  initialInvestment = signal<number | null>(null);
  annualInvestment = signal<number | null>(null);
  expectedReturn = signal<number | null>(null);
  duration = signal<number | null>(null);

  handleCalculate(event: Event) {
    event.preventDefault();

    console.log('Initial:', this.initialInvestment());
    console.log('Annual:', this.annualInvestment());
    console.log('Return:', this.expectedReturn());
    console.log('Duration:', this.duration());

    if (!this.checkValidInput()) {
      alert('Please fill in all fields.');
      return;
    }

    const userInput: UserInput = {
      initialInvestment: this.initialInvestment()!,
      annualInvestment: this.annualInvestment()!,
      expectedReturn: this.expectedReturn()!,
      duration: this.duration()!
    };

this.investmentResultsService.calculateInvestmentResults(userInput);

    // this.resetForm();
  }

  // maybe move to a service later
  resetForm() {
    this.initialInvestment.set(null);
    this.annualInvestment.set(null);
    this.expectedReturn.set(null);
    this.duration.set(null);
  }

  checkValidInput(): boolean {
    return (
      this.initialInvestment() !== null &&
      this.annualInvestment() !== null &&
      this.expectedReturn() !== null &&
      this.duration() !== null
    );
  }

}
