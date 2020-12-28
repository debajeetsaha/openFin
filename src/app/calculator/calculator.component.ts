import { repayOption, model, calculate } from './../utility';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public value1: number = 0;
  public value2: number = 0;
  public incomeValue: number = 0;
  public expenseValue: number = 0;
  public duration: number = 3;
  public optionList: { value: number; name: string }[];
  public isChecked: boolean = false;
  public calculatedValue: number;

  constructor() {
    this.optionList = repayOption;
   }

  ngOnInit() {
  }
  onChangeIncome(args) {
    console.log('income', args.newValue);
    this.incomeValue = args.newValue;
  }
  onChangeExpense(args) {
    console.log('expense', args.newValue);
    this.expenseValue = args.newValue;
  }
  calculate() {
    const data: model = {
      income: this.incomeValue,
      expense: this.expenseValue,
      duration: this.duration,
      existingLoans: this.isChecked
    };
    console.log('final data', data);
    this.calculatedValue = calculate(data);
    console.log('Result', this.calculatedValue);
  }
  reset() {
    this.incomeValue = 0;
    this.expenseValue = 0;
    this.duration = 3;
    this.isChecked = false;
    this.calculatedValue = 0;
    this.value1 = 0;
    this.value2 = 0;
  }
}
