import { Injectable } from '@angular/core';
import {UserInput} from '../models/user-input.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {

  constructor() { }

  calculateInvestmentResults(userInput: UserInput) {
  const annualData = [];
  let investmentValue = userInput.initialInvestment;

  for (let i = 0; i < userInput.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
    investmentValue += interestEarnedInYear + userInput.annualInvestment;
    const totalInterest =
      investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: userInput.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
    });
  }
  console.log('user input in service got here');

console.log(annualData);

  return annualData;
}
}
