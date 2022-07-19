import React, { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";



import {
  Button,
  Row,
  Typography,
} from "../../theme/ui-components";

import {
  IdentityInformationWrapper,
  CTAButtonWrapper,
  FormWrapper,
  InputsWrapper,
} from "./style";
import { FormInput } from "../../components/FormInput";
import Spinner from "../../components/shared/Spinner";
import persianToEnglishNumber from "../../utils/convert-persian-to-english-number";


interface IProps {
  cities?: { id?: number; name: string }[];
  provinces?: { id?: number; name: string }[];
}

interface IProvinceCity {
  id?: number;
  name?: string;
}

const IdentityInformation: React.FC<IProps> = ({ cities, provinces }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit, setValue, watch, control, formState } = useForm({
    mode: "onChange",
    // @ts-ignore
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required(),
      lastName: Yup.string().required(),
      fatherName: Yup.string().required(),
      birthCertificateId: Yup.string().required(),
      nationalCode: Yup.string().required().length(1),
      postalCode: Yup.string().required().length(10),
      address: Yup.string().required(),
    }),
  });

  const router = useRouter();
  const { guaranteeType = 0, simcardNumber } = router.query;


  const textAreaLabelRef = useRef<any>();
  const textAreaRef = useRef<any>();

  const [isShowProvincesBottomSheet, setIsShowProvincesBottomSheet] =
    useState<boolean>(false);
  const [isShowCitiesBottomSheet, setIsShowCitiesBottomSheet] =
    useState<boolean>(false);
  const [province, setProvince] = useState<IProvinceCity>({});
  const [firstNameValidation, setFirstNameValidation] =
    useState<boolean>(false);
  const [provinceNameById, setProvinceNameById] = useState<IProvinceCity>();
  const [provinceId, setProvinceId] = useState<number>();
  const [city, setCity] = useState<IProvinceCity>({});
  const [cityId, setCityId] = useState<number>();
  const [cityNameById, setCityNameById] = useState<IProvinceCity>();
  const [address, setAddress] = useState<string>("");
  const [nationalCode, setNationalCode] = useState();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleTextAreaClick = () => {
    textAreaLabelRef.current.style.top = "-12px";
    textAreaLabelRef.current.style.right = "12px";
    textAreaLabelRef.current.style.padding = "0 8px";
    textAreaRef.current.focus();
  };

  const handleTextAreablur = () => {
    if (watch("address")?.length !== 0) {
      textAreaLabelRef.current.style.top = "-12px";
    } else if (watch("address")?.length === 0) {
      textAreaLabelRef.current.style.top = "12px";
    }
  };

  // const handleSubmitForm = (data: any) => {
  //   setIsLoading(true);
  //   setUserInformation({
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     fatherName: data.fatherName,
  //     birthCertificateId: data.birthCertificateId,
  //     nationalCode: data.nationalCode,
  //     province: province?.id,
  //     city: province?.id,
  //     postalCode: data.postalCode,
  //     address: data.address,
  //     simcardNumber: simcardNumber,
  //   });
  //   if (+guaranteeType === 0) {
  //     router.push(`/buy/financial-Information?guaranteeType=${guaranteeType}`);
  //   } else {
  //     router.push(`/buy/before-payment?guaranteeType=${guaranteeType}`);
  //   }
  // };


  useEffect(() => {
    if (formState?.isValid) {
      setIsDisabled(false);
      return;
    } else {
      setIsDisabled(true);
    }
  }, [formState.isValid]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("userInformation")
    ) {
      let storedValue: any = localStorage.getItem("userInformation");
      if (storedValue) {
        storedValue = JSON.parse(storedValue);
        if (storedValue.province) {
          setProvinceId(storedValue.province);
        }
        if (storedValue.city) {
          setCityId(storedValue.city);
        }
        setValue("firstName", storedValue?.firstName);
        setValue("lastName", storedValue?.lastName);
        setValue("fatherName", storedValue?.fatherName);
        setValue("birthCertificateId", storedValue?.birthCertificateId);
        setValue("nationalCode", storedValue?.nationalCode);
        setValue("postalCode", storedValue?.postalCode);
        setValue("address", storedValue?.address);
      }
    }
  }, [setValue]);


  const handleOnChnage = (e: any) => {
    setValue("nationalCode", persianToEnglishNumber(String(e.target.value)));
  }

  const handleBirth = (e: any) => {
    setValue(
      "birthCertificateId",
      persianToEnglishNumber(String(e.target.value))
    );
  };

  const handlepostal = (e: any) => {
    setValue("postalCode", persianToEnglishNumber(String(e.target.value)));
  };

  


  return (
    <IdentityInformationWrapper>
      <Typography variant="BodyRegular" color="gray" className="mt-16">
        مشخصات خود را وارد کنید
      </Typography>
      <FormWrapper>
        <Row justifyContent="space-around" alignItems="start" className="mt-20">
          <InputsWrapper>
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: "وارد کردن نام الزامی است",
                pattern: {
                  value: /^(?![a-zA-Z]+$)/,
                  message: "فقط مجاز به استفاده از حروف فارسی هستید.",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { invalid, error },
                formState,
              }) => {
                return (
                  <FormInput
                    id="firstName"
                    type="text"
                    name="firstName"
                    label="نام"
                    onChange={onChange}
                    error={error}
                    onBlur={onBlur}
                    selected={value}
                    formState={formState}
                    invalid={invalid}
                  />
                );
              }}
            />
          </InputsWrapper>
          <InputsWrapper>
            <Controller
              control={control}
              name="lastName"
              rules={{
                required: "وارد کردن نام الزامی است",
                pattern: {
                  value: /^(?![a-zA-Z]+$)/,
                  message: "فقط مجاز به استفاده از حروف فارسی هستید.",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { invalid, error },
                formState,
              }) => {
                return (
                  <FormInput
                    id="lastName"
                    type="text"
                    name="lastName"
                    label="نام خانوادگی"
                    onChange={onChange}
                    error={error}
                    onBlur={onBlur}
                    selected={value}
                    formState={formState}
                    invalid={invalid}
                  />
                );
              }}
            />
          </InputsWrapper>
        </Row>
        <Row justifyContent="space-around" alignItems="start" className="mt-36">
          <InputsWrapper>
            <Controller
              control={control}
              name="fatherName"
              rules={{
                required: "وارد کردن نام الزامی است",
                pattern: {
                  value: /^(?![a-zA-Z]+$)/,
                  message: "فقط مجاز به استفاده از حروف فارسی هستید.",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { invalid, error },
                formState,
              }) => {
                return (
                  <FormInput
                    id="fatherName"
                    type="text"
                    name="fatherName"
                    label="نام پدر"
                    onChange={onChange}
                    error={error}
                    onBlur={onBlur}
                    selected={value}
                    formState={formState}
                    invalid={invalid}
                  />
                );
              }}
            />
          </InputsWrapper>
          <InputsWrapper>
            <Controller
              control={control}
              name="birthCertificateId"
              rules={{
                required: "شماره شناسنامه راه به صورت صحیح وارد نمایید",
                pattern: {
                  value: /^[۰۱۲۳۴۵۶۷۸۹0-9]*$/,
                  message: "شماره شناسنامه راه به صورت صحیح وارد نمایید",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { invalid, error },
                formState,
              }) => {
                return (
                  <FormInput
                    id="birthCertificateId"
                    type="tel"
                    name="birthCertificateId"
                    label="شماره شناسنامه"
                    onChange={(e: any) => {
                      onChange(e);
                      handleBirth(e);
                    }}
                    onBlur={onBlur}
                    error={error}
                    selected={value}
                    formState={formState}
                    invalid={invalid}
                    textAlign="left"
                    direction="ltr"
                    pattern="\d*"
                  />
                );
              }}
            />
          </InputsWrapper>
        </Row>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="mt-36"
        >
          <Controller
            control={control}
            name="nationalCode"
            rules={{
              required: "کد ملی را بصورت صحیح وارد کنید.",
              maxLength: {
                value: 10,
                message: "تعداد کاراکترها بیش از حد مجاز است.",
              },
              minLength: {
                value: 10,
                message: "تعداد کاراکترها کمتر از حد مجاز است.",
              },
              pattern: {
                value: /^[۰۱۲۳۴۵۶۷۸۹0-9]*$/,
                message: "کد ملی را بصورت صحیح وارد کنید.",
              },
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { invalid, error },
              formState,
            }) => {
              return (
                <FormInput
                  id="nationalCode"
                  type="tel"
                  name="nationalCode"
                  label="کد ملی"
                  onChange={(e: any) => {
                    onChange(e);
                    handleOnChnage(e);
                  }}
                  onBlur={onBlur}
                  error={error}
                  selected={value}
                  formState={formState}
                  invalid={invalid}
                  textAlign="left"
                  direction="ltr"
                  fullWidth
                  pattern="\d*"
                />
              );
            }}
          />
        </Row>
        <Row
          // justifyContent="space-between"
          // alignItems="center"
          className="mt-36 mb-80"
        >
          <Controller
            control={control}
            name="postalCode"
            rules={{
              required: "کد پستی را بصورت صحیح وارد کنید.",
              maxLength: {
                value: 10,
                message: "تعداد کاراکترها بیش از حد مجاز است.",
              },
              minLength: {
                value: 10,
                message: "تعداد کاراکترها کمتر از حد مجاز است.",
              },
              pattern: {
                value: /^[۰۱۲۳۴۵۶۷۸۹0-9]*$/,
                message: "کد پستی را بصورت صحیح وارد کنید.",
              },
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { invalid, error },
              formState,
            }) => {
              return (
                <FormInput
                  id="postalCode"
                  type="tel"
                  name="postalCode"
                  label="کد پستی"
                  onChange={(e: any) => {
                    onChange(e);
                    handlepostal(e);
                  }}
                  onBlur={onBlur}
                  selected={value}
                  error={error}
                  formState={formState}
                  invalid={invalid}
                  textAlign="left"
                  direction="ltr"
                  fullWidth
                  pattern="\d*"
                />
              );
            }}
          />
        </Row>
        <CTAButtonWrapper>
          <Button
            variant="contained"
            fullWidth
            height="48px"
            _size="XXL"
            color="primary"
            // onClick={handleSubmitForm}
            type="submit"
            disabled={isDisabled}
          >
            {isLoading ? (
              <Spinner size={24} isWhite={true} />
            ) : (
              <Typography variant="LargeTitleBold" color="white">
                تایید و ادامه
              </Typography>
            )}
          </Button>
        </CTAButtonWrapper>
      </FormWrapper>
    </IdentityInformationWrapper>
  );
};

export default IdentityInformation;
