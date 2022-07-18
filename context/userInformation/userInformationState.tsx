import React, { useReducer } from "react";

import userInformationContext from "./userInformationContext";
import userInformationReducer from "./userInformationReducer";

import { SET_USER_INFORMATION } from "../types";

const UserInformationState: React.FC = props => {
  const initialState = {
    firstName: null,
    lastName: null,
    fatherName: null,
    nationalCode: null,
    birthCertificateNumber: null,
    cityId: null,
    stateId: null,
    postalCode: null,
    address: null,
    simcardNumber: null,
  };

  const [state, dispatch] = useReducer(userInformationReducer, initialState);

  const setUserInformation = (userInfo: any) => {
    localStorage.setItem("userInformation", JSON.stringify(userInfo));
    dispatch({ type: SET_USER_INFORMATION, payload: userInfo });
  };

  const {
    firstName,
    lastName,
    fatherName,
    nationalCode,
    birthCertificateNumber,
    cityId,
    stateId,
    postalCode,
    address,
  } = state;

  return (
    <userInformationContext.Provider
      value={{
        firstName,
        lastName,
        fatherName,
        nationalCode,
        birthCertificateNumber,
        cityId,
        stateId,
        postalCode,
        address,
        setUserInformation,
      }}
    >
      {props.children}
    </userInformationContext.Provider>
  );
};

export default UserInformationState;
