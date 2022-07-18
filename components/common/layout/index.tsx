import React, { useState, useEffect, Fragment, useContext } from "react";
import { useRouter } from "next/router";

import Header from "../Header";
import { Container } from "../../../theme/ui-components";
import LayoutContext from "../../../context/layout/layoutContext";
import Spinner from "../../../components/shared/Spinner";
import SpinnerContainer from "./style";

const Layout: React.FC<any> = ({ children, hasInstallment, loanId }) => {
  const [pageType, setPageType] = useState(0);
  const { asPath } = useRouter();
  const { isLoading } = useContext(LayoutContext);

  useEffect(() => {
    const route = asPath.split("/")[1];
    if (route === "search") {
      setPageType(1);
    } else if (route === "buy") {
      setPageType(2);
    }
  }, [asPath]);

  // TODO: Add loading
  return (
    <Fragment>
      <Header
        pageType={pageType}
        hasInstallment={hasInstallment}
        loanId={loanId}
      />
      <Container>
        {isLoading ? (
          <SpinnerContainer>
            <Spinner size={80}/>
          </SpinnerContainer>
        ) : (
          children
        )}
      </Container>
    </Fragment>
  );
};

export default Layout;
