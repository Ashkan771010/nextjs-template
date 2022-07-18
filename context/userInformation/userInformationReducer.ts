import { SET_USER_INFORMATION } from "./../types";

const userInformationReducer = (state: any, action: any) => {
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
    simcardNumber = "",
  } = action?.payload;

  switch (action.type) {
    case SET_USER_INFORMATION:
      return {
        ...state,
        firstName,
        lastName,
        fatherName,
        nationalCode,
        birthCertificateNumber,
        cityId,
        stateId,
        postalCode,
        address,
        simcardNumber,
      };
      break;
    default:
      return state;
  }
};

export default userInformationReducer;
