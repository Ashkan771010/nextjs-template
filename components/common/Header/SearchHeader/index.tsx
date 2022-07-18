import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { TextField } from "../../../../theme/ui-components";

import {
  SearchHeaderWrapper,
  TextFieldWrapper,
  SearchIconWrapper,
} from "./style";

const SearchHeaderRoot: React.FC = () => {
  const router = useRouter();
  return (
    <SearchHeaderWrapper>
      <Image
        src="/images/general/back-icon.svg"
        alt="back icon"
        className="back-icon"
        width={24}
        height={24}
        onClick={() => router.back()}
      />
      <TextFieldWrapper>
        <TextField textAlign="right" fullWidth placeholder="جستجو" />
        <SearchIconWrapper>
          <Image
            src="/images/general/search.svg"
            alt="setare-logo"
            width={24}
            height={24}
            className="search-icon"
          />
        </SearchIconWrapper>
      </TextFieldWrapper>
    </SearchHeaderWrapper>
  );
};

export default SearchHeaderRoot;
