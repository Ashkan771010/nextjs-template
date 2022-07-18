import { SET_PRODUCT_ID } from "../types";

interface IState {
  productId: number
}

interface IAction {
  type?: string;
  payload?: number
}

const installmentDetailsReducer = (state: any, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case SET_PRODUCT_ID:
      return {
        ...state,
        productId: payload,
      };
    default:
      return state;
  }
};

export default installmentDetailsReducer;
