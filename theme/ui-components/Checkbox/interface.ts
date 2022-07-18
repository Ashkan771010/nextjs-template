import React, { HTMLProps } from "react";

type TSize = "small" | "medium";

export interface IProps extends HTMLProps<HTMLInputElement> {
  _size?: TSize;
}
