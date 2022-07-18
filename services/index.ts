import HttpService from "../config/api-service";
import {
  IChequeCreateLoanDemand,
  IComputeInstallmentData,
  ISimAndCashComputeInstallment,
  ISimAndCashCreateLoanDemand,
  ISimPriceSeen,
} from "./interface";
import {
  PRODUCTS,
  PRODUCTDETAILS,
  COMPUTEINSTALLMENT,
  BANKS,
  PROVINCES,
  FILEUPLOAD,
  CHEQUECREATELOANDEMAND,
  SIMANDCASHCREATELOANDEMAND,
  PAYMENTINQUERY,
  LOANSTATUS,
  SIMPRICESEEN,
  SIMANDCASHCOMPUTEINSTALLMENT,
  REGISTER,
  VERIFYCODE,
  CASHBEFOREPAYMENTFACTOR,
  INSTALLMENTBEFOREPAYMENTFACTOR,
  INSTALLMENTS,
  CITIES,
  CHEQUESEEN,
} from "./urls";

const services = {
  productsService: (page: number = 1, pageSize: number = 20) => {
    return HttpService.get(PRODUCTS, { params: { page, pageSize } });
  },
  productDetailsService: (id: number) => {
    return HttpService.get(PRODUCTDETAILS.concat(`/${id}`));
  },
  computeInstallmentService: (data: IComputeInstallmentData) => {
    return HttpService.post(COMPUTEINSTALLMENT, data);
  },
  banksService: () => {
    return HttpService.get(BANKS);
  },
  provincesService: () => {
    return HttpService.get(PROVINCES);
  },
  fileUploadService: (data: FormData) => {
    return HttpService.post(FILEUPLOAD, data);
  },
  chequeCreateLoanDemandService: (data: IChequeCreateLoanDemand) => {
    return HttpService.post(CHEQUECREATELOANDEMAND, data);
  },
  simAndCashCreateLoanDemandService: (data: ISimAndCashCreateLoanDemand) => {
    return HttpService.post(SIMANDCASHCREATELOANDEMAND, data);
  },
  paymentInQueryService: (paymentId: number | string) => {
    return HttpService.get(PAYMENTINQUERY, { params: { paymentId } });
  },
  loanStatusService: (LoanId: number) => {
    return HttpService.get(LOANSTATUS, { params: { LoanId } });
  },
  simPriceSeenService: (data: ISimPriceSeen) => {
    return HttpService.post(SIMPRICESEEN, data);
  },
  simAndCashComputeInstallmentService: (
    data: ISimAndCashComputeInstallment
  ) => {
    return HttpService.post(SIMANDCASHCOMPUTEINSTALLMENT, data);
  },
  loginRegisterService: (data: any) => {
    return HttpService.post(REGISTER, data);
  },
  loginVerifyCode: (data: any) => {
    return HttpService.post(VERIFYCODE, data);
  },
  cashBeforePaymentFactorService: (data: ISimAndCashComputeInstallment) => {
    return HttpService.post(CASHBEFOREPAYMENTFACTOR, data);
  },
  installmentBeforePaymentFactorService: (installmentId: number) => {
    return HttpService.post(INSTALLMENTBEFOREPAYMENTFACTOR, { installmentId });
  },
  installmentsService: (LoanId: number) => {
    return HttpService.get(INSTALLMENTS, { params: { LoanId } });
  },
  citiesService: (StateId: number) => {
    return HttpService.get(CITIES, { params: { StateId } });
  },
  chequeSeenService: (loanId: number) => {
    return HttpService.post(CHEQUESEEN, { loanId });
  },
};

export default services;
