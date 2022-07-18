import { Button, NewTextField, Row, Typography } from "@theme/ui-components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IProps } from "./interface";

const VerifyPhone: React.FC<IProps> = (props) => {
  const { setPhoneNumber } = props;

  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^[0][9][0|1|2|3|4|9][0-9]{8,8}$/, "شماره وارد شده صحیح نیست")
      .required("شماره وارد شده صحیح نیست")
  });

  const { control, setValue, watch, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  setPhoneNumber(watch("phoneNumber"));

  const handleOnInput = (e: any) => {
    e.currentTarget.value = e.currentTarget.value.slice(0, 11);
  };

  const handleCloseIcon = () => {
    setValue("phoneNumber", "");
  };

  return (
    <>
      <Typography variant="CaptionRegular" color="gray" className="mt-20">
        برای مشاهده سوابق خرید خود وارد شوید
      </Typography>
      <Controller
        control={control}
        name="phoneNumber"
        render={({
          field: { onChange, value },
        }) => {
          return (
            <>
              <NewTextField
                onInput={handleOnInput}
                className="mt-80"
                name="phoneNumber"
                error={errors?.phoneNumber}
                value={value}
                onChange={onChange}
                // onBlur={onBlur}
                autoComplete="none"
                label="شماره تماس"
                hasCloseIcon
                handleCloseIcon={handleCloseIcon}
                placeholder="مثل 09123456789"
                placeholderColor="#909090"
                placeholderAlignment="right"
                width="255px"
                type="number"
                // maxLength="11"
                direction="ltr"
                textAlign="left"
              />
            </>
          );
        }}
      />
    </>
  );
};

export default VerifyPhone;
