import { Typography } from "../../../theme/ui-components";
import React, { useRef, useEffect } from "react";
import useToggleOnFocus from "../../../hooks/useToggleOnFocus";

import { TextFieldWrapper, Label, TextField, ErrorM } from "./style";

const TextFieldRoot: React.FC<any> = (props) => {
  const [isShowPlaceholder, setIsShowPlaceholder] =
    React.useState<boolean>(false);
  const {
    label,
    fullWidth,
    defaultValue,
    width,
    type,
    autoComplete,
    placeholder,
    value,
    onChange,
    onInput,
    regex,
    helperText,
    errorMessage,
    className = "",
    required,
    maxLength,
    textAlign = "right",
    isNumber = false,
    direction,
    registerData,
    name,
    placeholderAlignment,
    placeholderColor,
    hasCloseIcon,
    handleCloseIcon,
    pattern,
    error,
  } = props;

  const { isFocused, hasValue, eventHandlers } = useToggleOnFocus({
    hasValue: !!defaultValue || !!value,
    isFocused: !!defaultValue || !!value,
  });

  
  if (error?.message) {
    var Message = error?.message
  }else if (error?.Message) {
    var Message = error?.Message
  }
  const inputRef = useRef<any>();
  const currentRef = inputRef;

  const handleInputClick = (event: any) => {
    setIsShowPlaceholder(true);
    eventHandlers.onFocus(event);
  };

  const handleInputChange = (event: any) => {
    if (onChange instanceof Function) {
      onChange(event);
    }
  };

  const handleInputBlur = (event: any) => {
    setIsShowPlaceholder(false);
      eventHandlers.onBlur(event);
  };

  const handleFocus = (event: any) => {
    setIsShowPlaceholder(true);
    eventHandlers.onFocus(event);
  };

  const handleOnLabelClick = () => {
    inputRef?.current?.focus();
  }

  useEffect(() => {
    setIsShowPlaceholder(false);
  }, [value]);

  return (
    <TextFieldWrapper fullWidth={fullWidth} width={width} className={className}>
      <Label 
      // @ts-ignore
      focused={isFocused}
      hasValue={hasValue || !!currentRef.current?.value}
      onClick={handleOnLabelClick}
      >
        {label}
      </Label>
      <TextField
        autoComplete={autoComplete}
        name={name}
        onInput={onInput}
        textAlign={textAlign}
        required={required}
        onFocus={handleFocus}
        type={type}
        placeholder={isShowPlaceholder && placeholder}
        onClick={handleInputClick}
        onChange={handleInputChange}
        value={value}
        maxLength={maxLength}
        direction={direction}
        ref={inputRef}
        onBlur={handleInputBlur}
        placeholderAlignment={placeholderAlignment}
        placeholderColor={placeholderColor}
        autoFocus={false}
        pattern={pattern}
      />
      <ErrorM>
        {error && (
          <>
            <img
              src="/images/general/error.svg"
              alt=""
              width={16}
              height={16}
            />
            <Typography variant="CaptionBold" color="red" className="mr-4 mt-4">
              {Message}
            </Typography>
          </>
        )}
      </ErrorM>
      {hasCloseIcon && value?.length > 0 && (
        <img
          src="/images/general/input-remove.svg"
          alt="Close Icon"
          className="close-icon"
          onClick={handleCloseIcon}
        />
      )}
    </TextFieldWrapper>
  );
};

export default TextFieldRoot;
