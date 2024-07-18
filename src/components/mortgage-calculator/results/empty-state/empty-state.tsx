import styles from "./empty-state.module.css";
import IllustrationEmpty from "@/assets/illustration-empty.svg?react";

function EmptyState() {
  return (
    <section className={styles.wrapper}>
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
