import InputForm from "./input-form";
import styles from "./mortgage-calculator.module.scss";
import Results from "./results";

function MortgageCalculator() {
  return (
    <div className={styles.calculator}>
      <InputForm />
      <Results />
    </div>
  );
}

export default MortgageCalculator;
