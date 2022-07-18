import React from "react";

import FinancialInformationState from "./financialInformation/financialInformationState";
import InstallmentState from "./installmentDetails/installmentDetailsState";
import LayoutState from "./layout/layoutState";
import UserInformationState from "./userInformation/userInformationState";

const MainProvider: React.FC = (props) => {
  return (
    <LayoutState>
      <FinancialInformationState>
        <InstallmentState>
          <UserInformationState>{props.children}</UserInformationState>
        </InstallmentState>
      </FinancialInformationState>
    </LayoutState>
  );
};

export default MainProvider;
