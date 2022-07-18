export type TTabItem = {
  key?: string;
  text?: string;
  value: number
};

export interface IProps {
  options: TTabItem[];
  defaultActive?: number;
  className?: string;
  onChange?: (loanPeriod: number) => void;
  text?: string;
  value?: number;
}
