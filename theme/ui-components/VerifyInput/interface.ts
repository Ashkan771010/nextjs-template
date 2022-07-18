import { HTMLProps } from "react";

export interface IProps extends HTMLProps<HTMLInputElement> {
    length: number
    error?: any
    handleVerifyCode?: (verifyCode: string) => void;
    verifyCode?: string;
    hasError?: boolean;
    setHasError?: (hasError: boolean) => void
}