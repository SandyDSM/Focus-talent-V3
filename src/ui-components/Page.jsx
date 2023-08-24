/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Page(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "1": { color: "rgba(255,255,255,1)" },
        Page: { backgroundColor: "rgba(1,97,167,1)" },
      },
      variantValues: { type: "active" },
    },
    { overrides: { "1": {}, Page: {} }, variantValues: { type: "default" } },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 8px 0px 8px"
      backgroundColor="rgba(188,211,228,1)"
      display="flex"
      {...getOverrideProps(overrides, "Page")}
      {...rest}
    >
      <Text
        fontFamily="Open Sans"
        fontSize="12px"
        fontWeight="600"
        color="rgba(1,97,167,1)"
        lineHeight="23px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="1"
        {...getOverrideProps(overrides, "1")}
      ></Text>
    </Flex>
  );
}
