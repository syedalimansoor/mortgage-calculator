import { Radio } from "@mantine/core";
import { ComponentProps } from "react";
import styles from "./radio-option.module.css";

interface Props extends ComponentProps<typeof Radio.Card> {
  label: string;
}

function RadioOption({ label, ...props }: Props) {
  return (
    <Radio.Card {...props} className={styles.option}>
      <Radio.Indicator
        classNames={{ icon: styles.icon, indicator: styles.indicator }}
      />
      <span>{label}</span>
    </Radio.Card>
  );
}

export default RadioOption;
