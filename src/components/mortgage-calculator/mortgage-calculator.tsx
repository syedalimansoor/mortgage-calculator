import { useState } from "react";
import InputForm from "./input-form";
import styles from "./mortgage-calculator.module.scss";
import Results from "./results";
import {
  MortgageCalculatorFormState,
  MortgageCalculatorResults,
} from "./mortgage-calculator.types";
import { calculateResults } from "./mortgage-calculator.utils";

function MortgageCalculator() {
  const [results, setResults] = useState<MortgageCalculatorResults | null>(
    null
  );

  const handleSubmit = (values: MortgageCalculatorFormState) => {
    setResults(calculateResults(values));
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className={styles.calculator}>
      <InputForm onSubmit={handleSubmit} onReset={handleReset} />
      <Results results={results} />
    </div>
  );
}

export default MortgageCalculator;
