import React from "react";

import Punch from "../Svg";

import { IProps } from "./interface";

import { Box, BoxContent } from "./style";

const BoxRoot: React.FC<any> = ({
  bgColor = "white",
  isInstallment,
  children,
}) => {
  return (
    <Box>
      <Punch
        className="top-punch"
        color={isInstallment ? "#f4f4fa" : "white"}
      />
      <BoxContent bgColor={bgColor}>{children}</BoxContent>
      <Punch
        className="bottom-punch"
        color={isInstallment ? "#f4f4fa" : "white"}
      />
    </Box>
  );
};

export default BoxRoot;
