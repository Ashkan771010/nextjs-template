import React from "react";

import DefaultHeaderRoot from "./DefaultHeader";
import BuyHeaderRoot from "./BuyHeader";
import SearchHeaderRoot from "./SearchHeader";

import HeaderEnum from "./enum";

import IProps from "./interface";

const HeaderRoot: React.FC<IProps> = ({ pageType = 0, hasInstallment, loanId }) => {
  if (pageType === HeaderEnum.search) {
    return <SearchHeaderRoot />
  } else if(pageType === HeaderEnum.buy) {
    return <BuyHeaderRoot />
  }
  return <DefaultHeaderRoot hasInstallment={hasInstallment} loanId={loanId} />
};

export default HeaderRoot;
