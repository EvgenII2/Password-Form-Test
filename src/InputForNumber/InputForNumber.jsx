import "./InputForNumber.css";
import React, { useEffect, useState } from "react";

const InputForNumber = React.forwardRef(
  (
    {
      lastInput,
      nextInput,
      isFirst,
      buttonSubmit,
      addNumberToCode,
      isRefresh,
      index,
    },
    ref
  ) => {
    const [digit, setDigit] = useState("");

    useEffect(() => {
      isRefresh && setDigit("");
    }, [isRefresh]);

    useEffect(() => {
      addNumberToCode(digit, index);
    }, [digit, index, addNumberToCode]);

    const onChange = (e) => {
      const inputValue = e.target.value;
      if (e.target.value === "") {
        setDigit(e.target.value);
      } else if (Number.isInteger(parseInt(inputValue))) {
        setDigit(e.target.value);
        if (buttonSubmit) {
          buttonSubmit.current.focus();
        } else {
          if (nextInput.current.value === "") nextInput.current.focus();
        }
      }
    };

    const onFocus = (e) => {
      console.log(lastInput);
      if (lastInput && lastInput.current.value === "") {
        lastInput.current.focus();
      }
      e.target.select();
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
