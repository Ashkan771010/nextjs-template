import { SpinnerWrapper } from "../../../components/shared/ProductCard/style";
import Spinner from "../../../components/shared/Spinner";
import React, { useContext } from "react";

import { IProps } from "./interface";

import { Button, ButtonLabel } from "./style";

const ButtonRoot: React.FC<IProps> = props => {
  const {
    _size,
    variant = "ghost",
    disabled = false,
    color,
    fullWidth = false,
    type = "button",
    radius = "lg",
    onClick,
    isLoading,
    className = "",
    children,
    height,
  } = props;
  return (
    <Button
      _size={_size}
      variant={variant}
      disabled={disabled}
      color={color}
      fullWidth={fullWidth}
      type={type}
      radius={radius}
      onClick={onClick}
      className={className}
      height={height}
      isLoading={isLoading}
    >
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size={40} isWhite={true}/>
        </SpinnerWrapper>
      ) : (
        <ButtonLabel>{children}</ButtonLabel>
      )}
    </Button>
  );
};

export default ButtonRoot;
