import Loading from "./loading";
import { LoadingStyled } from "./spinner.style";

interface IProps {
  size?: number;
  isWhite?: boolean;
}

function Spinner(props: IProps) {
  const { size = 24, isWhite } = props;
  return (
    <LoadingStyled size={size}>
      <Loading size={size} isWhite={isWhite} />
    </LoadingStyled>
  );
}

export default Spinner;
