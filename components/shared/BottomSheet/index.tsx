import React from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import { IProps } from "./interface";

import Portal from "../../../components/common/Portal";

import { Typography } from "../../../theme/ui-components";

import { bluredVariants, bottomSheetVariants } from "./BottomSheet.const";

import {
  BluredContainer,
  Bar,
  BottomSheet,
  ChildrenContainer,
  TitleWrapper,
  CloseIconWrapper,
  HeaderWRapper,
} from "./style";

const BottomSheetRoot: React.FC<IProps> = props => {
  const { isOpen, onClose, hasCloseIcon = false, title = "", children, maxHeight } = props;
  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <BluredContainer
            key="bottom_sheet_blured_container"
            initial={bluredVariants.inital}
            animate={bluredVariants.animate}
            exit={bluredVariants.exit}
            onClick={onClose}
          />
          <BottomSheet
            maxHeight={maxHeight}
            key="bottom_sheet_container"
            initial={bottomSheetVariants.inital}
            animate={bottomSheetVariants.animate}
            exit={bottomSheetVariants.exit}
          >
            <Bar />
            <HeaderWRapper>
              {hasCloseIcon && (
                <CloseIconWrapper title>
                  <Image
                    onClick={onClose}
                    src="/images/general/remove.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </CloseIconWrapper>
              )}

              {title && (
                <TitleWrapper>
                  <Typography variant="BodyRegular" color="gray">
                    {title}
                  </Typography>
                </TitleWrapper>
              )}
            </HeaderWRapper>

            <ChildrenContainer>{children}</ChildrenContainer>
          </BottomSheet>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default BottomSheetRoot;
