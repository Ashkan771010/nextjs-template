import React from "react";
import Image from "next/image";

import { IProps } from "./interface";

import { Typography } from "../../../theme/ui-components";

import { SelectWrapper } from "./style";

const SelectRoot: React.FC<IProps> = props => {
  const { placeholder, value, label, onClick, width, className } = props;

  const handleClicke = () => {
    if (onClick instanceof Function) {
      onClick();
    }
  };

  return (
    <SelectWrapper onClick={handleClicke} width={width} className={className}>
      <Typography variant="CaptionRegular" color="gray2" className="label">
        {label}
      </Typography>
      <Typography variant="BodyRegular" color="gray">
        {value || placeholder}
      </Typography>
      <Image
        src="/images/general/left-arrow.svg"
        alt="arrow-icon"
        width={24}
        height={24}
        className="arrow-icon"
      />
    </SelectWrapper>
  );
};

export default SelectRoot;
