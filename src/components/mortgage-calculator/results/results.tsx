import { Divider } from "@mantine/core";
import { MortgageCalculatorResults } from "../mortgage-calculator.types";
import EmptyState from "./empty-state";
import styles from "./results.module.scss";
import CountUp from "react-countup";

interface Props {
  results: MortgageCalculatorResults | null;
}

const Results = (props: Props) => {
  if (!props.results) {
    return <EmptyState />;
  }

  return (
    <section className={styles.wrapperFilled}>
      <h2>Your results</h2>
      <p className={styles.paragraph}>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <output className={styles.output}>
        <div>
          <h3 className={styles.outputLabel}>
            {props.results.mortgageType === "repayment"
              ? "Your monthly repayments"
              : "Your first interest payment"}
          </h3>
          <strong className={styles.monthlyRepayment}>
            <CountUp
              end={props.results.monthlyRepayment}
              decimals={2}
              duration={1}
              prefix="£"
            />
          </strong>
        </div>
        <Divider className={styles.divider} />
        <div>
          <h3 className={styles.outputLabel}>
            {props.results.mortgageType === "repayment"
              ? "Total you'll repay over the term"
              : "Total interest you'll pay"}
          </h3>
          <strong className={styles.totalRepayment}>
            <CountUp
              end={props.results.totalRepayment}
              decimals={2}
              duration={1}
              prefix="£"
            />
          </strong>
        </div>
      </output>
    </section>
  );
};

export default Results;
