import { SET_IS_LOADING } from "../types";

interface IState {
  isLoading?: boolean;
}

const LayoutReducer = (state: any, action: any) => {
  const { payload } = action;
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export default LayoutReducer;
