export interface IProps {
  className?: string;
  icon?: string;
  title?: string;
  onClick?: (gType: number) => void;
  guranteeType?: number;
  isAlone?: boolean;
  isCommingSoon?: boolean;
}
