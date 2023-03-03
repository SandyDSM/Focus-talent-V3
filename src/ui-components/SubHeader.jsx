/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading } from "@aws-amplify/ui-react";
export default function SubHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="667px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="4px"
      padding="12px 24px 12px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SubHeader")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        grow="1"
        shrink="1"
        basis="0"
        level="3"
        children="Administrar notificaciones"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </Flex>
  );
}
