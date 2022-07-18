import React from "react";

import { IProps } from "./interface";

import { Switch, Input, Indicator, SwitchTrack } from "./style";

const SwitchRoot: React.FC<IProps> = (
  { defaultChecked, checked, disabled, onChange, className },
  ref
) => (
  <Switch disabled={disabled} className={className}>
    <Input
      defaultChecked={defaultChecked}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <Indicator />
    <SwitchTrack />
  </Switch>
);

SwitchRoot.displayName = "SwitchComponent";

export default SwitchRoot;
