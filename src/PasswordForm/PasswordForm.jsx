import "./PasswordForm.css";
import React, { useRef, useState } from "react";
import InputForNumber from "../InputForNumber/InputForNumber";

function PasswordForm() {
  const [code, setCode] = useState("");

  const refFirstDigit = useRef();
  const refSecondDigit = useRef();
  const refThirdDigit = useRef();
  const refFourthDigit = useRef();
  const refFifthDigit = useRef();
  const refSixthDigit = useRef();
  const refButtonSubmit = useRef();

  return (
    <form className="PasswordForm" autoComplete="off">
      <h1 className="PasswordForm__title">Password</h1>
      <p className="PasswordForm__subtitle">Enter the code we sent to email</p>
      <div className="PasswordForm__inputs">
        <InputForNumber
          ref={refFirstDigit}
          lastInput={refSixthDigit}
          nextInput={refSecondDigit}
          isFirst={true}
        />
        <InputForNumber
          ref={refSecondDigit}
          lastInput={refFirstDigit}
          nextInput={refThirdDigit}
        />
        <InputForNumber
          ref={refThirdDigit}
          lastInput={refSecondDigit}
          nextInput={refFourthDigit}
        />
        <InputForNumber
          ref={refFourthDigit}
          lastInput={refThirdDigit}
          nextInput={refFifthDigit}
        />
        <InputForNumber
          ref={refFifthDigit}
          lastInput={refFourthDigit}
          nextInput={refSixthDigit}
        />
        <InputForNumber
          ref={refSixthDigit}
          lastInput={refFifthDigit}
          nextInput={refFirstDigit}
          buttonSubmit={refButtonSubmit}
        />
      </div>
      <button ref={refButtonSubmit}>Check</button>
    </form>
  );
}

export default PasswordForm;
