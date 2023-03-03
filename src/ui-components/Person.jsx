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
import {
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function Person(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "image 3": {},
        Heading: {},
        "Frame 478": {},
        MyIcon: {},
        Cerrar: {},
        close: {},
        Person: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "image 3": {},
        Heading: { shrink: "1", grow: "1", basis: "0" },
        "Frame 478": {},
        MyIcon: {},
        Cerrar: { display: "none" },
        close: {},
        Person: {},
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="12px"
      direction="row"
      width="1441px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 2px rgba(0.6823529601097107, 0.7019608020782471, 0.7176470756530762, 0.25)"
      borderRadius="4px"
      padding="4px 24px 4px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Person")}
      {...rest}
    >
      <Flex
        gap="12px"
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
        {...getOverrideProps(overrides, "Frame 478")}
      >
        <Image
          width="48px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image 3")}
        ></Image>
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="6"
          children="CARLOS TORRES FLORES"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
      </Flex>
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "close")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="close"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cerrar"
          {...getOverrideProps(overrides, "Cerrar")}
        ></Text>
      </Flex>
    </Flex>
  );
}
