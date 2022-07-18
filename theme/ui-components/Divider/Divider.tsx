import React from "react";

import { IProps } from "./interface";

import { Divider } from "./style";

const DividerRoot: React.FC<IProps> = ({ className = "" }) => {
  return <Divider className={className} />;
};

export default DividerRoot;
