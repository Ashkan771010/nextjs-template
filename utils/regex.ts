const persianNumber = new RegExp(/^[\u06F0-\u06F90-9]+$/);
const englishNumber = new RegExp(/^[0-9]+$/);

export const _postalCodeRegex = new RegExp(
  /^\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/
);
export const postalCodeRegex = new RegExp(
  `${_postalCodeRegex.source}|${persianNumber.source}`
);
export const internationalNumberRegex = new RegExp(
  `${englishNumber.source}|${persianNumber.source}`
);
export const hasUppeAndLowerChar = new RegExp(/(?=.*[a-z])(?=.*[A-Z])/);
export const hasNumbers = new RegExp(/[0-9]+/);
export const hasMinimum8Chars = new RegExp(/.{8,}/);
export const numberLength = new RegExp(/\d{11}/);
