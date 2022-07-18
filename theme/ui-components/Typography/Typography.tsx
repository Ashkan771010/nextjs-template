import React from "react";

import { IProps } from "./interface";

import { Typography } from "./style";

const TypographyRoot: React.FC<any> = props => {
  const {
    variant = "TitleBold",
    color = "black",
    className = "",
    textAlign,
    mt,
    mb,
    ml,
    mr,
    children,
    display,
    direction,
  } = props;
  return (
    <Typography
      variant={variant}
      color={color}
      className={className}
      textAlign={textAlign}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      display={display}
      direction={direction}
    >
      {children}
    </Typography>
  );
};

export default TypographyRoot;
