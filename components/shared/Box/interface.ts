export type TBoxColor =
  | "blueBerry"
  | "blue"
  | "orange"
  | "gray"
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
  | "paleGray2"
  | "blueBerry2";

export interface IProps {
  bgColor?: TBoxColor;
}

export interface IImageWrapperProps {
  isTop?: boolean;
}
