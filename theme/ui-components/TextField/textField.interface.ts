import React, { HTMLProps, ChangeEvent } from "react";

export interface IInputLabelProps {
  shrink: boolean;
}

export type TSize = "large" | "medium" | "small";

export interface IInput {
  focused?: boolean;

  hasValue?: boolean;

  shrink?: boolean;

  _size?: TSize;

  textAlign?: string;
}
export interface FocusedProps {
  focused?: boolean;

  hasValue?: boolean;

  shrink?: boolean;
}

export type THelperType = "success" | "warning" | "error";

export interface IProps extends HTMLProps<HTMLInputElement> {
  error?: boolean;

  helperText?: string | undefined | false;

  label?: string;

  _size?: TSize;

  inputLabelProps?: IInputLabelProps;

  fullWidth?: boolean;

  helperType?: THelperType;

  textAlign?: string;

  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value?: string
  ) => void;
}

export interface IHelperTextVariant {
  error?: boolean;

  variant: "filled" | "outlined" | "standard";
}
