import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import HttpService from "@config/api-service";

import financialInformationContext from "src/context/financialInformation/financialInformationContext";

import BottomSheetRoot from "@components/shared/BottomSheet";

import {
  Button,
  NewTextField,
  Row,
  Select,
  Step,
  Typography,
} from "@theme/ui-components";

import {
  FinancialInformationWrapper,
  FormWrapper,
  HintTextWrapper,
  PageFooter,
  BottomSheetInputWrapper,
  BottomSheetInput,
  BottomSheetBody,
  BottomSheetItem,
  UploadAreaWrapper,
  CheckUploadButton,
  FileNameHolder,
  RealFileInput,
} from "./style";
import services from "src/services";
import { CTAButtonWrapper } from "@components/IdentityInformation/style";

const STEPDATA = [
  { isComplete: true, isActive: false, textStep: "تسهیلات" },
  { isComplete: true, isActive: false, textStep: "اطلاعات هویتی" },
  { isComplete: false, isActive: true, textStep: "اطلاعات مالی" },
  { isComplete: false, isActive: false, textStep: "پیش‌پرداخت" },
];

interface IProps {
  banks?: { id?: number; name: string }[];
  provinces?: { id?: number; name: string }[];
}

const FinancialInformation: React.FC<IProps> = ({ banks, provinces }) => {
  const [isDisableSubmitButton, setIsDisableSubmitButton] =
    useState<boolean>(true);

  const router = useRouter();
  const { guaranteeType } = router.query;

  const {
    setFinancialInformation,
  } = useContext<any>(financialInformationContext);

  const realFileInput = useRef<any>();
  const realFileInputNationalCode = useRef<any>();
  const checkCallToActionButon = useRef<any>();
  const nationalCardCallToActionButon = useRef<any>();

  const [isShowBanksBottomSheet, setIsShowBanksBottomSheet] = useState(false);
  const [isShowProvincesBottomSheet, setIsShowProvincesBottomSheet] =
    useState(false);
  const [bank, setBank] = useState<any>({});
  const [bankId, setBankId] = useState<number>();
  const [bankNameById, setBankNameById] = useState<any>();
  const [province, setProvince] = useState<any>({});
  const [provinceId, setProvinceId] = useState<number>();
  const [provinceNameById, setProvinceIdByName] = useState<any>()
  const [accountNumber, setAccountNumber] = useState<any>("");
  const [checkImage, setCheckImage] = useState<any>("فایل را آپلود کنید");
  const [nationalCodeImage, setNationalCodeImage] =
    useState<any>("فایل را آپلود کنید");
  const [checkResultId, setCheckResultId] = useState<string>("");
  const [nationalCardResultId, setNationalCardResultId] = useState<string>("");

  const handleCheckImage = (event: any) => {
    let file = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file?.[0]);
    setCheckImage(file[0].name);
    reader.onload = (event: any) => {
      let data = new FormData();
      data.append("file", file[0]);
      data.append("fileType", "1");
      services.fileUploadService(data).then(response => {
        setCheckResultId(response?.data?.result);
        checkCallToActionButon.current.style.backgroundColor = "#39AC65";
      });
    };
  };

  const handleNationalCodeImage = (event: any) => {
    let file = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file?.[0]);
    setNationalCodeImage(file[0].name);
    reader.onload = (event: any) => {
      let data = new FormData();
      data.append("file", file[0]);
      data.append("fileType", "1");
      services.fileUploadService(data).then(response => {
        setNationalCardResultId(response?.data?.result);
        nationalCardCallToActionButon.current.style.backgroundColor = "#39AC65";
      });
    };
  };

  const handleOpenFileUploadWindow = () => {
    realFileInput.current.click();
  };

  const handleOpenNationalCodeFileUploadWindow = () => {
    realFileInputNationalCode.current.click();
  };

  const handleSetBank = (bank: { name: string; id: number }) => {
    setBank(bank);
    setIsShowBanksBottomSheet(false);
  };

  const handleSetProvince = (province: { name: string; id: number }) => {
    setProvince(province);
    setIsShowProvincesBottomSheet(false);
  };

  // #TODO: ADD TO CONTEXT AND LOCAL STORAGE
  const handleSubmit = () => {
    const data = {
      bankId: bank.id,
      stateId: province.id,
      accountNumber,
      nationalCardImageId: nationalCardResultId,
      chequeImageId: checkResultId,
    };
    setFinancialInformation(data);
    router.push(`/buy/before-payment?guaranteeType=${guaranteeType}`);
  };

  useEffect(() => {
    if (
      bank &&
      province &&
      accountNumber &&
      nationalCardResultId &&
      checkResultId
    ) {
      setIsDisableSubmitButton(false);
    } else {
      setIsDisableSubmitButton(true);
    }
  }, [bank, province, accountNumber, nationalCardResultId, checkResultId]);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('financialinformation')) {
         let storedValue: any = localStorage.getItem('financialinformation');
         if (storedValue) {
             storedValue = JSON.parse(storedValue) 
             if(storedValue.bankId) {
              setBankId(storedValue.bankId)
             }
             if(storedValue.stateId) {
              setProvinceId(storedValue.stateId)
             }
             setAccountNumber(storedValue.accountNumber)
         }
    }
},[]) 

useEffect(() => {
  if(bankId) {
    banks?.find((item) => {
      if(item.id === bankId) {
        setBankNameById(item)
      }
    })
  }
}, [bankId, banks])

useEffect(() => {
  if(provinceId) {
    provinces?.find((item) => {
      if(item.id === provinceId) {
        setProvinceIdByName(item)
      }
    })
  }
}, [provinceId, provinces])

  return (
    <FinancialInformationWrapper>
      <Step stepData={STEPDATA} />
      <Row justifyContent="flex-start" alignItems="center" className="mt-16">
        <Typography variant="BodyRegular" color="gray">
          اطلاعات مالی خود را وارد کنید
        </Typography>
      </Row>
      <FormWrapper>
        <Row
          justifyContent="space-between"
          alignItems="center"
          className="select-wrapper"
        >
          <Select
            placeholder={bankNameById ? bankNameById?.name : bank?.name || "بانک"}
            value=""
            label="نام بانک"
            onClick={() => setIsShowBanksBottomSheet(true)}
          />
          <Select
            placeholder={provinceNameById ? provinceNameById?.name : province?.name || "استان"}
            value=""
            label="استان"
            onClick={() => setIsShowProvincesBottomSheet(true)}
            className="mt-24"
          />
        </Row>
        <Row justifyContent="center" alignItems="center" className="mt-36">
          <NewTextField
            fullWidth
            label="شماره حساب / شماره شبا"
            type="text"
            value={accountNumber}
            onChange={(event: any) => setAccountNumber(event?.target.value)}
          />
          <HintTextWrapper>
            <Image
              src="/images/general/hint.svg"
              alt="hint-icon"
              width={16}
              height={16}
            />
            <Typography
              variant="CaptionBold"
              color="brownGray"
              className="mr-4"
            >
              حساب جاری که دارای دسته چک می‌باشد
            </Typography>
          </HintTextWrapper>
        </Row>
        <Row justifyContent="center" alignItems="center" className="mt-12">
          <UploadAreaWrapper>
            <Typography
              variant="CaptionRegular"
              color="gray"
              className="label-holder"
            >
              تصویر چک برگ
            </Typography>
            <RealFileInput
              ref={realFileInput}
              type="file"
              hidden
              className="real-file"
              onChange={handleCheckImage}
              accept=".png,.jpg,.jpeg"
            />
            <FileNameHolder>{checkImage}</FileNameHolder>
            <CheckUploadButton
              ref={checkCallToActionButon}
              onClick={handleOpenFileUploadWindow}
            >
              <Typography
                variant="CaptionRegular"
                color="white"
                className="ml-12"
              >
                جایگزینی
              </Typography>
              <Image
                src="/images/general/folder.svg"
                alt="folder"
                width={24}
                height={24}
              />
            </CheckUploadButton>
          </UploadAreaWrapper>
          <HintTextWrapper>
            <Image
              src="/images/general/hint.svg"
              alt="hint-icon"
              width={16}
              height={16}
            />
            <Typography
              variant="CaptionBold"
              color="brownGray"
              className="mr-4"
            >
              برگ چک سفید و کد صیادی آن مشخص باشد
            </Typography>
          </HintTextWrapper>
        </Row>
        <Row justifyContent="center" alignItems="center" className="mt-12">
          <UploadAreaWrapper>
            <Typography
              variant="CaptionRegular"
              color="gray"
              className="label-holder"
            >
              تصویر روی کارت ملی
            </Typography>
            <RealFileInput
              ref={realFileInputNationalCode}
              type="file"
              hidden
              className="real-file"
              onChange={handleNationalCodeImage}
              accept=".png,.jpg,.jpeg"
            />
            <FileNameHolder>{nationalCodeImage}</FileNameHolder>
            <CheckUploadButton
              ref={nationalCardCallToActionButon}
              onClick={handleOpenNationalCodeFileUploadWindow}
            >
              <Typography
                variant="CaptionRegular"
                color="white"
                className="ml-12"
              >
                جایگزینی
              </Typography>
              <Image
                src="/images/general/folder.svg"
                alt="folder"
                width={24}
                height={24}
              />
            </CheckUploadButton>
          </UploadAreaWrapper>
          <HintTextWrapper mb="70px">
            <Image
              src="/images/general/hint.svg"
              alt="hint-icon"
              width={16}
              height={16}
            />
            <Typography
              variant="CaptionBold"
              color="brownGray"
              className="mr-4"
            >
              متعلق به صاحب حساب جاری باشد
            </Typography>
          </HintTextWrapper>
        </Row>
      </FormWrapper>
      <CTAButtonWrapper>
        <Button
          variant="contained"
          fullWidth
          height="48px"
          _size="XXL"
          color="primary"
          onClick={handleSubmit}
          disabled={isDisableSubmitButton}
        >
          <Typography variant="LargeTitleBold" color="white">
            تایید و ادامه
          </Typography>
        </Button>
      </CTAButtonWrapper>
      <BottomSheetRoot
        isOpen={isShowBanksBottomSheet}
        onClose={() => setIsShowBanksBottomSheet(false)}
        title="انتخاب بانک"
        maxHeight="500px"
      >
        <BottomSheetInputWrapper>
          <BottomSheetInput placeholder="جستجو در بانک‌ها" />
          <img
            className="search-icon"
            src="/images/general/search.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
        </BottomSheetInputWrapper>
        <BottomSheetBody>
          {banks instanceof Array &&
            banks?.map((bank: any) => {
              return (
                <BottomSheetItem
                  key={bank?.id}
                  onClick={() => handleSetBank(bank)}
                >
                  <Typography variant="TitleRegular" color="gray">
                    {bank?.name}
                  </Typography>
                </BottomSheetItem>
              );
            })}
        </BottomSheetBody>
      </BottomSheetRoot>
      <BottomSheetRoot
        isOpen={isShowProvincesBottomSheet}
        onClose={() => setIsShowProvincesBottomSheet(false)}
        title="انتخاب استان"
        maxHeight="500px"
      >
        <BottomSheetInputWrapper>
          <BottomSheetInput placeholder="جستجو در استان‌ها" />
          <img
            className="search-icon"
            src="/images/general/search.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
        </BottomSheetInputWrapper>
        <BottomSheetBody>
          {provinces instanceof Array &&
            provinces?.map((province: any) => {
              return (
                <BottomSheetItem
                  key={province?.id}
                  onClick={() => handleSetProvince(province)}
                >
                  <Typography variant="TitleRegular" color="gray">
                    {province?.name}
                  </Typography>
                </BottomSheetItem>
              );
            })}
        </BottomSheetBody>
      </BottomSheetRoot>
    </FinancialInformationWrapper>
  );
};

export default FinancialInformation;
