import React, { useReducer } from "react";

import LayoutContext from "./layoutContext";
import LayoutReducer from "./layoutReducer";

import { SET_IS_LOADING } from "../types";

const LayoutState: React.FC = (props) => {
  const initialState = {
    isLoading: false,
  };

  const [state, dispatch] = useReducer(LayoutReducer, initialState);

  const setLoading = (loading: boolean) => {
    dispatch({ type: SET_IS_LOADING, payload: loading });
  };

  const { isLoading } = state;

  return (
    <LayoutContext.Provider
      value={{
        isLoading,
        setLoading,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutState;
