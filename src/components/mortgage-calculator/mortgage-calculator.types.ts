export interface MortgageCalculatorFormState {
  mortgageAmount: number | "";
  interestRate: number | "";
  mortgageTerm: number | "";
  mortgageType: "repayment" | "interest-only" | null;
}

export interface MortgageCalculatorResults {
  monthlyRepayment: number;
  totalRepayment: number;
}
