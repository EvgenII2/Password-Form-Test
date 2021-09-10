import "./InputForNumber.css";
import React, { useState } from "react";

const InputForNumber = React.forwardRef(
  ({ lastInput, nextInput, isFirst, buttonSubmit }, ref) => {
    const [digit, setDigit] = useState("");

    const onChange = (e) => {
      const inputValue = e.target.value;
      if (e.target.value === "") {
        setDigit(e.target.value);
      } else if (Number.isInteger(parseInt(inputValue))) {
        setDigit(e.target.value);
        if (buttonSubmit) {
          buttonSubmit.current.focus();
        } else {
          nextInput.current.focus();
        }
      }
    };

    const onFocus = (e) => {
      if (!isFirst && lastInput.current.value === "") {
        lastInput.current.focus();
      }
    };

    return (
      <input
        ref={ref}
        value={digit}
        type="text"
        minLength="1"
        maxLength="1"
        className="InputForNumber"
        autoComplete="new-password"
        onChange={onChange}
        onFocus={onFocus}
      />
    );
  }
);

export default InputForNumber;
