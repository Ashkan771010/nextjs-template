import { LoginStep } from "@pages/login/login.constant";

export interface IProps {
    phoneNumber: string | undefined
    handleVerifyCode?: (event: any) => void;
    hasError?: boolean
    setHasError?: (hasError: boolean) => void
    setStatus?: (status: any) => void
}