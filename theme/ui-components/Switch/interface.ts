import React, { ChangeEventHandler } from "react";
export interface IProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
