export const repayOption = [
    { value: 3, name: '3 Months' },
    { value: 6, name: '6 Months' },
    { value: 12, name: '12 Months' }
];

export function calculate(data: model) {
    const result = ((data.income - data.expense) / data.duration).toFixed(2);
    return parseFloat(result);
};

export class model {
    income: number;
    expense: number;
    duration: number;
    existingLoans: boolean;
}