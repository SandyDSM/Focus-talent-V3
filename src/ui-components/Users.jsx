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
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Users(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m1" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h3" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m3" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m5" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h9" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h1" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h4" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h7" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m6" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h10" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m2" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h5" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m4" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h2" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h6" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h8" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m7" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h11" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "m8" } },
    { overrides: { "image 4": {}, Users: {} }, variantValues: { type: "h12" } },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Users")}
      {...rest}
    >
      <Image
        width="92px"
        height="92px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image 4")}
      ></Image>
    </Flex>
  );
}
