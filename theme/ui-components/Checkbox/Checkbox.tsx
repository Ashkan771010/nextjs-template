import React from "react";

import { IProps } from "./interface";

import { Checkbox, Input, Indicator, Label, Tick } from "./slyle";

const CheckboxRoot: React.FC<IProps> = props => {
  const {
    id,
    name,
    defaultChecked,
    checked,
    onChange,
    _size = "medium",
  } = props;
  return (
    <Checkbox _size={_size}>
      <Input
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        checked={checked}
      />
      <Indicator />
      <Tick>✓</Tick>
      <Label />
    </Checkbox>
  );
};

export default CheckboxRoot;
