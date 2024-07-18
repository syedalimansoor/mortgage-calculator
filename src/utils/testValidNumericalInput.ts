import { KeyboardEvent } from "react";

export default function testValidNumericalInput(
  event: KeyboardEvent<HTMLInputElement>
) {
  const key = event.key;

  // Allow functional keys
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return true;
  }

  // Allow backspace, delete, arrows, home, end, tab, enter
  if (/^Backspace|Delete|Arrow/.test(key) || /^Home|End|Tab|Enter$/.test(key)) {
    return true;
  }

  // Allow only one decimal point
  if (key === "." && !event.currentTarget.value.includes(".")) {
    return true;
  }

  // Allow digits
  if (/^[\d]$/.test(key)) {
    return true;
  }

  return false;
}
