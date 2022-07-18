import React, { Fragment } from "react";
import { NewTextField } from "../../theme/ui-components";
import { ErrorMessage, Wrapper } from "./style";
import { Typography } from "../../theme/ui-components/Typography/style";
import Image from "next/image";

export const FormInput: React.FC<any> = props => {
  const {
    name,
    label,
    id,
    error,
    type = "text",
    onChange,
    onBlur,
    selected,
    formState,
    invalid,
    textAlign,
    direction,
    fullWidth,
    pattern,
  } = props;
  return (
    <Wrapper>
      <NewTextField
        label={label}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        id={id}
        value={selected}
        textAlign={textAlign}
        direction={direction}
        fullWidth={fullWidth}
        pattern={pattern}
      />
      {(error?.message) && (
        <ErrorMessage fullWidth={fullWidth}>
          <Image
            src="/images/general/error.svg"
            alt=""
            width={16}
            height={16}
          />
          <Typography variant="CaptionBold" color="red" className="mr-4 mt-4">
            {error.message}
          </Typography>
        </ErrorMessage>
      )}
    </Wrapper>
  );
};
