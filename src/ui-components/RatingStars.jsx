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
import Star from "./Star";
import { Flex, Text } from "@aws-amplify/ui-react";
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
        TxtRating: { children: "1. Modelo a seguir" },
        RatingStars: {},
      },
      variantValues: { rating: "one" },
    },
    {
      overrides: {
        Star39504871: {},
        Star39504872: {},
        Star39504873: {},
        Star39504874: {},
        Star39504875: {},
        "Frame 13976": {},
        TxtRating: {},
        RatingStars: {},
      },
      variantValues: { rating: "default" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: {},
        Star39504874: {},
        Star39504875: {},
        "Frame 13976": {},
        TxtRating: { children: "2. Modelo a seguir" },
        RatingStars: {},
      },
      variantValues: { rating: "two" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: { type: "active" },
        Star39504874: {},
        Star39504875: {},
        "Frame 13976": {},
        TxtRating: { children: "3. Modelo a seguir" },
        RatingStars: {},
      },
      variantValues: { rating: "three" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: { type: "active" },
        Star39504874: { type: "active" },
        Star39504875: {},
        "Frame 13976": {},
        TxtRating: { children: "4. Excede espectativas" },
        RatingStars: {},
      },
      variantValues: { rating: "four" },
    },
    {
      overrides: {
        Star39504871: { type: "active" },
        Star39504872: { type: "active" },
        Star39504873: { type: "active" },
        Star39504874: { type: "active" },
        Star39504875: { type: "active" },
        "Frame 13976": {},
        TxtRating: { children: "5. Modelo a seguir" },
        RatingStars: {},
      },
      variantValues: { rating: "five" },
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
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(92,102,112,1)"
        lineHeight="15px"
        textAlign="left"
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
        children="0. Modelo a seguir"
        {...getOverrideProps(overrides, "TxtRating")}
      ></Text>
    </Flex>
  );
}
