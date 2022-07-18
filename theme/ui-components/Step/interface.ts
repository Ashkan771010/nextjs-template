export type TStepData = {
  isComplete?: boolean;
  isActive?: boolean;
  textStep?: string;
};

export interface IProps {
  data?: TStepData[];
  isPurchaseRecord?: boolean;
}
