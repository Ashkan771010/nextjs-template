import React from "react";
import { useRouter } from "next/router";

import { Typography } from "@theme/ui-components/Typography/style";

import { GuideWRapper, Button } from "./style";

import data from "../../static/data-guide";
import { CTAButtonWrapper } from "@components/IdentityInformation/style";

const Guide: React.FC<any> = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <GuideWRapper>
      <Typography variant="BodyBold" color="gray" className="mt-4 mb-16">
        {data?.title}
      </Typography>
      {data?.paragraphs?.map((paragraph: string, index: number) => (
        <Typography
          key={index.toString()}
          variant="CaptionRegular"
          color="gray"
          className="mb-24"
          display="block"
        >
          {paragraph}
        </Typography>
      ))}
      <CTAButtonWrapper>
      <Button onClick={handleClick}>
        <Typography variant="LargeTitleBold" color="gray">
          بازگشت
        </Typography>
      </Button>
      </CTAButtonWrapper>
    </GuideWRapper>
  );
};

export default Guide;

{
}
