import { createRef, useRef } from "react";
import { Button, Row, Typography } from "@theme/ui-components";
import arrayRange from "@utils/array-range";
import { SendingCodeWrapper, VerifyCodeWrapper } from "./style";
import VerifyCodeRoot from "@theme/ui-components/VerifyInput/VerifyCode";
import { IProps } from "./interface";
import { LoginStep } from "@pages/login/login.constant";


const SendingCode: React.FC<IProps> = (props) => {
  const { setStatus, phoneNumber, handleVerifyCode, hasError, setHasError } = props;

  const handleOnClick = () => {
    setStatus?.(LoginStep.VerifyPhone)
  }

  return (
    <SendingCodeWrapper>
      <Row
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Typography variant="CaptionRegular" className="mt-20">
          کد فعالسازی به {phoneNumber} ارسال شد
        </Typography>
        <Button _size="large" color="success" className="mt-12" onClick={handleOnClick}>
          <Typography variant="BodyLight">ویرایش شماره</Typography>
          <img src="/images/general/edit.svg" className="edit-icon" />
        </Button>
        <VerifyCodeWrapper className="mt-40">
                <VerifyCodeRoot
                  handleVerifyCode={handleVerifyCode}
                  length={5}
                  hasError={hasError}
                  setHasError={setHasError}
            />
        </VerifyCodeWrapper>
      </Row>
    </SendingCodeWrapper>
  );
};

export default SendingCode;
