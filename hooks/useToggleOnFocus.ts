import React, { useState, useMemo, FocusEventHandler, FocusEvent } from "react";

interface IToggleOnFocus {
  isFocused: boolean;
  hasValue: boolean;
  eventHandlers: {
    onFocus: FocusEventHandler<HTMLInputElement>;
    onBlur: FocusEventHandler<HTMLInputElement>;
  };
}
interface IInitialValue {
  hasValue: boolean;
  isFocused: boolean;
}

const useToggleOnFocus = (initialState: IInitialValue = { hasValue: false, isFocused: false }): IToggleOnFocus => {
  const [isFocused, setIsFocused] = useState<boolean>(initialState.isFocused);
  const [hasValue, setHasValue] = useState<boolean>(initialState.hasValue);

  const eventHandlers = useMemo(
    () => ({
      onFocus: (event: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);

        if (event.target.value) {
          setHasValue(true);
        }
      },
      onBlur: (event: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);

        if (!event.target.value) {
          setHasValue(false);
        } else {
          setHasValue(true);
        }
      },
    }),
    []
  );

  return { isFocused, hasValue, eventHandlers };
};

export default useToggleOnFocus;
