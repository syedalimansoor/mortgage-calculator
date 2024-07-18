import Button from "@/components/common/button";
import styles from "./input-form.module.css";
import { useCallback } from "react";
import NumberInput from "@/components/common/form-controls/number-input";
import IconCalculator from "@/assets/icon-calculator.svg?react";
import { isNotEmpty, useForm } from "@mantine/form";
import RadioGroup from "@/components/common/form-controls/radio/group";
import RadioOption from "@/components/common/form-controls/radio/option";
import { MortgageCalculatorFormState as FormState } from "../mortgage-calculator.types";

const initialValues: FormState = {
  mortgageAmount: "",
  interestRate: "",
  mortgageTerm: "",
  mortgageType: null,
};

function InputForm() {
  const form = useForm<FormState>({
    initialValues,
    validate: {
      mortgageAmount: isNotEmpty("This field is required"),
      interestRate: isNotEmpty("This field is required"),
      mortgageTerm: isNotEmpty("This field is required"),
      mortgageType: isNotEmpty("This field is required"),
    },
  });

  const handleSubmit: (values: FormState) => void = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <form className={styles.form} onSubmit={form.onSubmit(handleSubmit)}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mortgage Calculator</h1>
        <Button onClick={form.reset} variant="link" type="reset">
          Clear All
        </Button>
      </header>
      <main className={styles.body}>
        <NumberInput
          label="Mortgage Amount"
          leftSection="£"
          thousandSeparator=","
          min={0}
          {...form.getInputProps("mortgageAmount")}
        />
        <div className={styles.row}>
          <NumberInput
            label="Mortgage Term"
            rightSection="years"
            min={0}
            {...form.getInputProps("mortgageTerm")}
          />
          <NumberInput
            label="Interest Rate"
            rightSection="%"
            min={0}
            {...form.getInputProps("interestRate")}
          />
        </div>

        <RadioGroup
          label="Mortgage Type"
          {...form.getInputProps("mortgageType")}
        >
          <RadioOption label="Repayment" value="repayment" />
          <RadioOption label="Interest Only" value="interest-only" />
        </RadioGroup>
      </main>
      <footer className={styles.footer}>
        <Button
          variant="primary"
          type="submit"
          startIcon={<IconCalculator width={20} />}
        >
          Calculate Repayments
        </Button>
      </footer>
    </form>
  );
}

export default InputForm;
