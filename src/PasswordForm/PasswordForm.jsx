import "./PasswordForm.css";
import React, { useEffect, useRef, useState } from "react";
import InputForNumber from "../InputForNumber/InputForNumber";
import { GeneratePassword, NUMBER_OF_DIGIT } from "../utils/GeneratePassword";
import happyCatPicture from "../images/picture-happy-cat.jpg";
import sadCatPicture from "../images/picture-sad-cat.jpg";

function PasswordForm() {
  const [inputCode, setInputCode] = useState("");
  const [generateCode, setGenerateCode] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [isRefresh, setRefresh] = useState(false);

  let digits = [];

  useEffect(() => {
    if (
      inputCode.length === NUMBER_OF_DIGIT &&
      generateCode.toString() === inputCode
    ) {
      console.log("ok");
      setIsOk(true);
    } else {
      console.log("not ok");
      setIsOk(false);
    }
    setRefresh(false);
  }, [inputCode, generateCode]);

  const refFirstDigit = useRef();
  const refSecondDigit = useRef();
  const refThirdDigit = useRef();
  const refFourthDigit = useRef();
  const refFifthDigit = useRef();
  const refSixthDigit = useRef();

  const refs = [
    refFirstDigit,
    refSecondDigit,
    refThirdDigit,
    refFourthDigit,
    refFifthDigit,
    refSixthDigit,
  ];

  const refButtonSubmit = useRef();

  const onClickGenerateButton = (e) => {
    setGenerateCode(GeneratePassword);
    setInputCode("");
    refFirstDigit.current.value = 0;
    setRefresh(true);
    digits = [];
  };

  const addNumberToCode = (number, index) => {
    digits[index] = number;
  };

  const onSubmitPasswordForm = (e) => {
    e.preventDefault();
    setInputCode(digits.join(""));
  };

  return (
    <div className="section-container">
      <div className="GeneratingPasswordSection">
        <h1 className="GeneratingPasswordSection__title">Generate Password</h1>
        <p className="GeneratingPasswordSection__desc">
          Click button to generate new code
        </p>
        <button
          className="GeneratingPasswordSection__button"
          onClick={onClickGenerateButton}
        >
          Generate
        </button>
        <p className="GeneratingPasswordSection__result-container">
          New password:
          <span> {generateCode}</span>
        </p>
      </div>
      <form className="PasswordForm" onSubmit={onSubmitPasswordForm}>
        <h2 className="PasswordForm__title">Password</h2>
        <p className="PasswordForm__subtitle">Enter the code we generate</p>
        <div className="PasswordForm__inputs">
          {refs.map((ref, index) => (
            <InputForNumber
              key={index}
              ref={ref}
              lastInput={index > 0 ? refs[index - 1] : null}
              nextInput={
                index < NUMBER_OF_DIGIT - 1 ? refs[index + 1] : refButtonSubmit
              }
              isFirst={index === 0 ? true : false}
              addNumberToCode={addNumberToCode}
              isRefresh={isRefresh}
              index={index}
            />
          ))}
        </div>
        <button className="PasswordForm__button" ref={refButtonSubmit}>
          Check
        </button>
      </form>
      <img
        className="result-picture"
        src={isOk ? happyCatPicture : sadCatPicture}
        alt="cat"
      />
    </div>
  );
}

export default PasswordForm;
