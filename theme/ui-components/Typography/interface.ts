export type TVariant =
  | "XLargeTitleBold"
  | "XLargeTitleRegular"
  | "LargeTitleBold"
  | "LargeTitleRegular"
  | "LargeTitleLight"
  | "TitleRegular"
  | "TitleBold"
  | "BodyBold"
  | "BodyRegular"
  | "BodyLight"
  | "CaptionBold"
  | "CaptionRegular"
  | "CaptionLight"
  | "textBold"
  | "textRegular"
  | "textLight";

export type TColor =
  | "blueBerry"
  | "blue"
  | "orange"
  | "gray"
  | "gray2"
  | "darkBlueBerry"
  | "black"
  | "lightBlack"
  | "paleBlack"
  | "brownGray"
  | "lightGray"
  | "red"
  | "green"
  | "paleGray"
  | "paleBlueBerry"
  | "white"
  | "disableBlueBerry"
  | "disableBlue"
  | "mci"
  | "irancell"
  | "rightel"
  | "blueBerry2";

export interface IProps {
  variant?: TVariant;
  color?: TColor;
  className?: string;
  textAlign?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  display?: string;
  direction?: string;
}
