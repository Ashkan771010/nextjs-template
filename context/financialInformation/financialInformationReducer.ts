import { SET_FINANCIAL_INFORMATION } from "../types";

const financialInformationReducer = (state: any, action: any) => {
  const { bankId, stateId, accountNumber, nationalCardImageId, chequeImageId } =
    action?.payload;

  switch (action.type) {
    case SET_FINANCIAL_INFORMATION:
      return {
        ...state,
        bankId,
        stateId,
        accountNumber,
        nationalCardImageId,
        chequeImageId,
      };
    default:
      return state;
  }
};

export default financialInformationReducer;
