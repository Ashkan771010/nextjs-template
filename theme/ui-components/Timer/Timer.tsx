import { useEffect, useState } from "react";
import { ResendButton, TimerSpan } from "./style";
import { Typography } from "@theme/ui-components";
import services from "src/services";

const TimerRoot = (props: any) => {
  const { secondProps = 60, className, phoneNumber } = props;
  const [seconds, setSeconds] = useState<number>(secondProps);

  const handleOnClick = async () => {
    const data = { phoneNumber: phoneNumber };
    await services.loginRegisterService(data).then((res) => {
      if (res?.data?.status === 200) {
        setSeconds(60);
      }
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds !== 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(0);
      }
    }, 1000);
  }, [seconds]);

  return (
    <>
      {seconds > 0 ? (
        <TimerSpan className="mt-24">
          <Typography variant="BodyRegular" color="gray" textAlign="center">
            {seconds}
          </Typography>
        </TimerSpan>
      ) : (
        <ResendButton className="mt-24" onClick={handleOnClick}>
          <Typography variant="BodyRegular" color="gray">
            ارسال مجدد کد فعالسازی
          </Typography>
        </ResendButton>
      )}
    </>
  );
};

export default TimerRoot;
