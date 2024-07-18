import { MortgageCalculatorFormState } from "./mortgage-calculator.types";

function calculateMonthlyRepayment(
  mortgageAmount: number,
  interestRate: number,
  mortgageTerm: number,
  mortgageType: "repayment" | "interest-only"
) {
  const monthlyInterestRate = interestRate / 12 / 100;
  const totalPayments = mortgageTerm * 12;

  if (mortgageType === "repayment") {
    return (
      mortgageAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -totalPayments)))
    );
  }

  return mortgageAmount * monthlyInterestRate;
}

function calculateTotalRepayment(
  monthlyRepayment: number,
  mortgageTerm: number
) {
  return monthlyRepayment * mortgageTerm * 12;
}

export function calculateResults(formState: MortgageCalculatorFormState) {
  if (
    formState.mortgageAmount === "" ||
    formState.interestRate === "" ||
    formState.mortgageTerm === "" ||
    formState.mortgageType === null
  ) {
    return null;
  }

  const monthlyRepayment = calculateMonthlyRepayment(
    formState.mortgageAmount,
    formState.interestRate,
    formState.mortgageTerm,
    formState.mortgageType
  );

  const totalRepayment = calculateTotalRepayment(
    monthlyRepayment,
    formState.mortgageTerm
  );

  return { monthlyRepayment, totalRepayment };
}
