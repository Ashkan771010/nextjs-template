import React, { useReducer } from "react";

import FinancialInformationContext from "./financialInformationContext";
import financialInformationReducer from "./financialInformationReducer";

import { SET_FINANCIAL_INFORMATION } from "../types";

const FinancialInformationState: React.FC = props => {
  const initialState = {
    bankId: null,
    stateId: null,
    accountNumber: null,
    nationalCardImageId: null,
    chequeImageId: null,
  };

  const [state, dispatch] = useReducer(
    financialInformationReducer,
    initialState
  );

  const setFinancialInformation = (financialInformation: any) => {
    localStorage.setItem(
      "financialinformation",
      JSON.stringify(financialInformation)
    );
    dispatch({
      type: SET_FINANCIAL_INFORMATION,
      payload: financialInformation,
    });
  };

  const { bankId, stateId, accountNumber, nationalCardImageId, chequeImageId } =
    state;

  return (
    <FinancialInformationContext.Provider
      value={{
        bankId,
        stateId,
        accountNumber,
        nationalCardImageId,
        chequeImageId,
        setFinancialInformation,
      }}
    >
      {props.children}
    </FinancialInformationContext.Provider>
  );
};

export default FinancialInformationState;
