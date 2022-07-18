import React, { Fragment } from "react";
import Image from "next/image";

import { IProps } from "./interface";

import { Typography } from "../../../theme/ui-components";

import { BreadCrumbWrapper, IconWrapper } from "./style";

const BreadCrumb: React.FC<IProps> = ({ data }) => {
  return (
    <BreadCrumbWrapper>
      {data?.map((item, index) => {
        return (
          <Fragment key={item}>
            <Typography
              variant="textRegular"
              color={+index === data?.length - 1 ? "blueBerry2" : "brownGray"}
            >
              {item}
            </Typography>
            {+index !== data?.length - 1 && (
              <IconWrapper>
                <Image
                  className="ml-4"
                  src="/images/general/left-arrow.svg"
                  alt="setare-logo"
                  width={16}
                  height={16}
                />
              </IconWrapper>
            )}
          </Fragment>
        );
      })}
    </BreadCrumbWrapper>
  );
};

export default BreadCrumb;
