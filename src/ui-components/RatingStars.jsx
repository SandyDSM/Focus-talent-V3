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
} from "./utils";
import Star from "./Star";
import { Flex } from "@aws-amplify/ui-react";
export default function RatingStars(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: {},
        Star39504873: {},
        Star39504874: {},
        Star39504875: {},
        "Frame 13976": {},
        RatingStars: {},
      },
      variantValues: { rating: "1" },
    },
    {
      overrides: {
        Star39504871: {},
        Star39504872: {},
        Star39504873: {},
        Star39504874: {},
        Star39504875: {},
        "Frame 13976": {},
        RatingStars: {},
      },
      variantValues: { rating: "0" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: {},
        Star39504874: {},
        Star39504875: {},
        "Frame 13976": {},
        RatingStars: {},
      },
      variantValues: { rating: "2" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: { type: "active" },
        Star39504874: {},
        Star39504875: {},
        "Frame 13976": {},
        RatingStars: {},
      },
      variantValues: { rating: "3" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: { type: "active" },
        Star39504874: { type: "active" },
        Star39504875: {},
        "Frame 13976": {},
        RatingStars: {},
      },
      variantValues: { rating: "4" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: { type: "active" },
        Star39504874: { type: "active" },
        Star39504875: { type: "active" },
        "Frame 13976": {},
        RatingStars: {},
      },
      variantValues: { rating: "5" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="4px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "RatingStars")}
      {...rest}
    >
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 13976")}
      >
        <Star
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
          type="default"
          {...getOverrideProps(overrides, "Star39504871")}
        ></Star>
        <Star
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
          type="default"
          {...getOverrideProps(overrides, "Star39504872")}
        ></Star>
        <Star
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
          type="default"
          {...getOverrideProps(overrides, "Star39504873")}
        ></Star>
        <Star
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
          type="default"
          {...getOverrideProps(overrides, "Star39504874")}
        ></Star>
        <Star
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
          type="default"
          {...getOverrideProps(overrides, "Star39504875")}
        ></Star>
      </Flex>
    </Flex>
  );
}
