import React, { ReactNode } from "react";
export interface IProps {
  isOpen?: boolean;
  onClose?: () => void;
  hasCloseIcon?: boolean;
  title?: string;
  children?: ReactNode;
  maxHeight?: string;
}
