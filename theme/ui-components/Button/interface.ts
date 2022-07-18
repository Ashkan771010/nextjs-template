import React, { HTMLProps } from "react";

export type TVariant = "ghost" | "contained";
export type TColor =
  | "default"
  | "primary"
  | "success"
  | "failure"
  | "dark"
  | "orange";
export type TSize =
  | "XXL"
  | "XL"
  | "large"
  | "pair"
  | "pair2"
  | "small"
  | "selected"
  | "unSelected";
export type TType = "button" | "reset" | "submit";
export type TRadius = "sm" | "md" | "lg" | "xlg" | "xxlg";

export interface IProps extends HTMLProps<HTMLButtonElement> {
  _size?: TSize;
  variant?: TVariant;
  disabled?: boolean;
  color?: TColor;
  fullWidth?: boolean;
  type?: TType;
  radius?: TRadius;
  isLoading?: boolean;
}
