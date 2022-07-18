import React, { createContext } from "react";

const LayoutContext = createContext({
  isLoading: false,
  setLoading: (isLoading: boolean) => {},
});

export default LayoutContext;
