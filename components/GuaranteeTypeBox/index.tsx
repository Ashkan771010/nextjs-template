import React from "react";
import Image from "next/image";

import { IProps } from "./interface";

import { Box, Badge } from "./style";
import { Typography } from "@theme/ui-components";

const GuranteeTypeBox: React.FC<IProps> = ({
  className,
  icon,
  title,
  onClick,
  guranteeType = 0,
  isAlone = false,
  isCommingSoon
}) => {
  
  const handleClick = (guranteeType: number) => {
    if (onClick instanceof Function) {
      onClick(guranteeType);
    }
  };

  return (
    <Box
      className={className}
      isAlone={isAlone}
      onClick={() => handleClick(guranteeType)}
    >
      {isCommingSoon && <Badge>بزودی</Badge>}
      <img src={icon ?? ""} alt="guarantee-icon" width={48} height={48} />
      <Typography variant="BodyRegular" color="darkBlueBerry">
        {title}
      </Typography>
    </Box>
  );
};

export default GuranteeTypeBox;
