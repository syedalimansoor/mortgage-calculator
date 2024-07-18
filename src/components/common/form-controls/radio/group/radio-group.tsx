import { Radio } from "@mantine/core";
import { ComponentProps } from "react";
import styles from "./radio-group.module.css";
import formControlStyles from "../../form-control.module.css";

interface Props extends ComponentProps<typeof Radio.Group> {}

function RadioGroup({ children, ...props }: Props) {
  return (
    <Radio.Group
      {...props}
      classNames={{
        label: formControlStyles.label,
        error: formControlStyles.error,
      }}
    >
      <div className={styles.group}>{children}</div>
    </Radio.Group>
  );
}

export default RadioGroup;
