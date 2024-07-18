import styles from "./App.module.scss";
import MortgageCalculator from "@/components/mortgage-calculator";

function App() {
  return (
    <div className={styles.wrapper}>
      <MortgageCalculator />
    </div>
  );
}

export default App;
