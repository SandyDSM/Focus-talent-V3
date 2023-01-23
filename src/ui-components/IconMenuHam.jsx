/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function IconMenuHam(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "IconMenuHam")}
      {...rest}
    >
      <Icon
        width="30px"
        height="22.5px"
        viewBox={{ minX: 0, minY: 0, width: 30, height: 22.5 }}
        paths={[
          {
            d: "M30 4.5L30 0L0 0L0 4.5L30 4.5ZM30 13.5L30 9L0 9L0 13.5L30 13.5ZM30 22.5L30 18L0 18L0 22.5L30 22.5Z",
            fill: "rgba(248,248,248,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
