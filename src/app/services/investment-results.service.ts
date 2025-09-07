import { Injectable } from '@angular/core';
import { UserInput } from '../models/user-input.model';
import { ResultData } from '../models/result-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsService {

  calculateInvestmentResults(userInput: UserInput): ResultData[] {
  const annualData: ResultData[] = [];

  const initial =userInput.initialInvestment;
  const annual = userInput.annualInvestment;
  const returnRate = userInput.expectedReturn;
  const duration =userInput.duration;

  let investmentValue = initial;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;

    const interestEarnedInYear = investmentValue * (returnRate / 100);
    investmentValue += interestEarnedInYear + annual;

    const totalInterest = investmentValue - annual * year - initial;

    const resultData: ResultData = {
      id: crypto.randomUUID(),
      year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annual,
      totalInterest,
      totalAmountInvested: initial + annual * year,
    };

    annualData.push(resultData);
  }

  return annualData;
}
}
