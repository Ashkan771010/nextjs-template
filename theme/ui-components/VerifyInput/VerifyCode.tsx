import { Typography } from "@theme/ui-components";
import React, { useEffect, useState, useRef, FormEvent } from "react";
import { IProps } from "./interface";
import { Error, VerifyInput } from "./style";

const VerifyCodeRoot: React.FC<IProps> = (props) => {
  const { length, handleVerifyCode, hasError, setHasError } = props;

  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef<HTMLInputElement[]>([]);
  const full = code.join("");


  const processInput = (e: FormEvent<HTMLInputElement>, slot: number) => {
    const num = e.currentTarget.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      newCode.join("");
    }
  };

  const handleOnInput = () => {
    setHasError?.(false)
  }

  const onKeyUp = (e: KeyboardEvent, slot: number) => {
    if (e.key === "Backspace" && !code[slot] && slot !== 0) {
      const newCode = [...code];
        newCode[slot - 1] = "";
        setCode(newCode);
        inputs.current[slot - 1].focus();
    }
  };

  useEffect(() => {
    handleVerifyCode?.(full);
  }, [code, full, handleVerifyCode])

  return (
    <>
      {code.map((num, idx) => {
        return (
          <VerifyInput
            key={idx}
            name={`otp${idx}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={num}
            onFocus={handleOnInput}
            autoFocus={!code[0].length && idx === 0}
            onChange={(e: FormEvent<HTMLInputElement>) => processInput(e, idx)}
            onKeyUp={(e: any) => onKeyUp(e, idx)}
            ref={(ref: any) => inputs.current.push(ref)}
            hasError={hasError}
          />
        );
      })}
      <Error>
        {hasError && (
          <>
            <img
              src="/images/general/error.svg"
              alt=""
              width={16}
              height={16}
            />
            <Typography variant="CaptionBold" color="red" className="mr-4 mt-4">
              شماره وارد شده صحیح نیست
            </Typography>
          </>
        )}
      </Error>
    </>
  );
};

export default VerifyCodeRoot;
