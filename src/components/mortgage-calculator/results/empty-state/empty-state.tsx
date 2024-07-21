import styles from "./empty-state.module.css";
import resultsStyles from "../results.module.scss";
import IllustrationEmpty from "@/assets/illustration-empty.svg?react";
import clsx from "clsx";

function EmptyState() {
  return (
    <section className={clsx(styles.wrapper, resultsStyles.wrapper)}>
      <IllustrationEmpty />
      <h2>Results shown here</h2>
      <p className={styles.paragraph}>
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
}
export default EmptyState;
