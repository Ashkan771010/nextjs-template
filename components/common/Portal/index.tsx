import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { IProps } from "./interface";

const Portal: React.FC<IProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? ReactDOM.createPortal(children, document.body) : null;
};

export default Portal;
