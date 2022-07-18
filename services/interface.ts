export interface IComputeInstallmentData {
  productId: number;
  loanPeriod: number;
}

export interface IChequeCreateLoanDemand {
  intallmentDetail: {
    productId: number;
    installmentPeriod: number;
  };
  userInformation: {
    firstName: string;
    lastName: string;
    fatherName: string;
    nationalCode: number;
    birthCertificateNumber: number;
    cityId: number;
    stateId: number;
    postalCode: number;
    address: string;
  };
  financialInformation: {
    bankId: number;
    stateId: number;
    accountNumber: number;
    nationalCardImageId: string;
    chequeImageId: string;
  };
}

export interface ISimAndCashCreateLoanDemand {
  simcardNumber: number;
  productId: number;
  userInformation: {
    firstName: string;
    lastName: string;
    fatherName: string;
    nationalCode: number;
    birthCertificateNumber: number;
    cityId: number;
    stateId: number;
    postalCode: number;
    address: string;
  };
}

export interface ISimPriceSeen {
  loanId: number;
}

export interface ISimAndCashComputeInstallment {
  loanId: number;
  loanPeriod: number;
}