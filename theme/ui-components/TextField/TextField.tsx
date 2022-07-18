import React, { useRef, forwardRef, FocusEvent, ChangeEvent, RefObject } from "react";

import useToggleOnFocus from "../../../hooks/useToggleOnFocus";

import { convertPersianToEnglishNumber } from "../../../utils/index";

import { IProps, IInputLabelProps } from "./textField.interface";

import {
  Input,
  FormControlRoot,
  Fieldset,
  Legend,
  Label,
  InputWrapper,
  HelperText,
} from "./styled";

const defaultInputLabelProps: IInputLabelProps = {
  shrink: false,
};

const TextFieldRoot = forwardRef<HTMLInputElement, IProps>(
  (
    {
      value,
      defaultValue,
      placeholder,
      readOnly,
      inputLabelProps = defaultInputLabelProps,
      label,
      disabled,
      error,
      helperText,
      fullWidth,
      helperType,
      type = "text",
      _size = "large",
      id,
      textAlign = "right",
      onFocus,
      onBlur,
      onChange,
    },
    forwardedRef
  ) => {
    const inputRef = useRef<HTMLInputElement>();
    const currentRef = (forwardedRef ??
      inputRef) as RefObject<HTMLInputElement>;

    const { isFocused, hasValue, eventHandlers } = useToggleOnFocus({
      hasValue: !!defaultValue || !!value,
      isFocused: !!defaultValue || !!value,
    });

    /**
     * The input onFocus event handler.
     * @param event {HTMLInputElement} - event
     */
    const handleFocusOnInput = (event: FocusEvent<HTMLInputElement>) => {
      eventHandlers.onFocus(event);

      if (onFocus instanceof Function) {
        onFocus(event);
      }
    };

    /**
     * The input onBlur event handler.
     * @param event {HTMLInputElement} - evnet
     */
    const handleBlurOnInput = (event: FocusEvent<HTMLInputElement>) => {
      eventHandlers.onBlur(event);

      if (onBlur instanceof Function) {
        onBlur(event);
      }
    };

    /**
     * The input onChange event handler.
     * @param event {HTMLInputElement} event
     */
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange instanceof Function) {
        if (type === "number") {
          onChange(event, convertPersianToEnglishNumber(event.target.value));
        } else {
          onChange(event);
        }
      }
    };

    return (
      <FormControlRoot
        fullWidth={fullWidth}
        helperType={helperType}
        helperText={helperText}
      >
        <Label
          focused={isFocused || inputLabelProps.shrink}
          hasValue={hasValue || !!currentRef.current?.value}
        >
          {label}
        </Label>

        <InputWrapper>
          <Input
            onFocus={handleFocusOnInput}
            onBlur={handleBlurOnInput}
            onChange={handleChangeInput}
            defaultValue={defaultValue}
            id={id}
            autoComplete="no"
            _size={_size}
            value={value}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            ref={currentRef}
            type={type}
            shrink={!!placeholder && !!label && !inputLabelProps.shrink}
            textAlign={textAlign}
          />

          <Fieldset
            focused={isFocused}
            hasValue={hasValue || !!currentRef.current?.value}
          >
            <Legend
              focused={
                !!label &&
                (isFocused ||
                  inputLabelProps.shrink ||
                  hasValue ||
                  !!currentRef.current?.value)
              }
            >
              <span>{label}</span>
            </Legend>
          </Fieldset>
        </InputWrapper>

        {helperText && (
          <HelperText variant="filled" error={error}>
            {helperText}
          </HelperText>
        )}
      </FormControlRoot>
    );
  }
);

TextFieldRoot.displayName = "MyComponent";

export default TextFieldRoot;
