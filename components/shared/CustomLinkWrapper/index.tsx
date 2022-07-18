import React, { forwardRef } from "react";

import { Props, RefType } from "./interface";

import Division from "./style";

const CustomLinkWrapper = forwardRef<RefType, Props>((props, ref) => (
  <Division
    display={props.display}
    justifyContent={props.justifyContent}
    alignItems={props.alignItems}
    onClick={props.onClick}
    ref={ref}
  >
    {props.children}
  </Division>
));

CustomLinkWrapper.displayName = "CustomLinkWrapper";

export default CustomLinkWrapper;
