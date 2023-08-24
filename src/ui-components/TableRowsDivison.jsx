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
import IconActions from "./IconActions";
import IconAddsec from "./IconAddsec";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function TableRowsDivison(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Icon-Actions": {},
        "icon_Add-sec": {},
        "BIM CEDIS METROPOLITANO": {},
        "Frame 455": {},
        "Frame 456": {},
        las: {},
        "Frame 454": {},
        Divider: {},
        TableRowsDivison: {},
      },
      variantValues: { type: "add" },
    },
    {
      overrides: {
        "Icon-Actions": { name: "less" },
        "icon_Add-sec": {},
        "BIM CEDIS METROPOLITANO": { shrink: "0" },
        "Frame 455": { shrink: "0" },
        "Frame 456": {},
        las: {},
        "Frame 454": {},
        Divider: {},
        TableRowsDivison: {},
      },
      variantValues: { type: "less" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="851px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "TableRowsDivison")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="1px 24px 1px 24px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 454")}
      >
        <Flex
          gap="48px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 456")}
        >
          <IconActions
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            name="Add"
            {...getOverrideProps(overrides, "Icon-Actions")}
          ></IconActions>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 455")}
          >
            <IconAddsec
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "icon_Add-sec")}
            ></IconAddsec>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              textTransform="uppercase"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="BIM CEDIS METROPOLITANO"
              {...getOverrideProps(overrides, "BIM CEDIS METROPOLITANO")}
            ></Text>
          </Flex>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          textTransform="uppercase"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="30px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="las"
          {...getOverrideProps(overrides, "las")}
        ></Text>
      </Flex>
      <Divider
        width="unset"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
