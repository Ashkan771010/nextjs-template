import CSSType from "csstype";

export interface IProps {
  justifyContent?:
    | {
        xs?: CSSType.Property.JustifyContent;
        sm?: CSSType.Property.JustifyContent;
        md?: CSSType.Property.JustifyContent;
        lg?: CSSType.Property.JustifyContent;
      }
    | CSSType.Property.JustifyContent;
  alignItems?:
    | {
        xs?: CSSType.Property.AlignItems;
        sm?: CSSType.Property.AlignItems;
        md?: CSSType.Property.AlignItems;
        lg?: CSSType.Property.AlignItems;
      }
    | CSSType.Property.AlignItems;
  flexDirection?:
    | {
        xs?: CSSType.Property.FlexDirection;
        sm?: CSSType.Property.FlexDirection;
        md?: CSSType.Property.FlexDirection;
        lg?: CSSType.Property.FlexDirection;
      }
    | CSSType.Property.FlexDirection;
  gutter?: number;
  wrap?: CSSType.Property.FlexWrap;
}
