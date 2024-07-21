import {
  MortgageCalculatorFormState,
  MortgageCalculatorResults,
} from "./mortgage-calculator.types";

function calculateMonthlyRepayment(
  mortgageAmount: number,
  interestRate: number,
  mortgageTerm: number
) {
  const monthlyInterestRate = interestRate / 12 / 100;
  const totalPayments = mortgageTerm * 12;

  if (interestRate === 0) {
    return mortgageAmount / totalPayments;
  }

  return (
    mortgageAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments)))
  );
}

export function calculateResults(
  formState: MortgageCalculatorFormState
): MortgageCalculatorResults | null {
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
    formState.mortgageTerm
  );

  const totalRepayment = monthlyRepayment * formState.mortgageTerm * 12;

  if (formState.mortgageType === "repayment") {
    return { monthlyRepayment, totalRepayment, mortgageType: "repayment" };
  }

  const firstInterestPayment =
    formState.mortgageAmount * (formState.interestRate / 12 / 100);
  const totalInterest = totalRepayment - formState.mortgageAmount;

  return {
    monthlyRepayment: firstInterestPayment,
    totalRepayment: totalInterest,
    mortgageType: "interest-only",
  };
}
