import { ComponentProps } from "react";
import { NumberInput as MantineNumberInput } from "@mantine/core";
import styles from "./number-input.module.css";
import formControlStyles from "../form-control.module.css";
import clsx from "clsx";

interface Props extends ComponentProps<typeof MantineNumberInput> {}

function NumberInput({ hideControls = true, ...props }: Props) {
  return (
    <MantineNumberInput
      {...props}
      hideControls={hideControls}
      classNames={(_, props) => ({
        label: formControlStyles.label,
        wrapper: clsx(styles.wrapper, { [styles.wrapperError]: props.error }),
        input: styles.input,
        section: clsx(styles.affix, { [styles.affixError]: props.error }),
        error: formControlStyles.error,
      })}
    />
  );
}

export default NumberInput;
