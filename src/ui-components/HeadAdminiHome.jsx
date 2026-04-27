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
import { Flex, Image, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import Ilustration from "./Ilustration";
export default function HeadAdminiHome(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        ImgCol: {},
        Welcome: {},
        Name: {},
        Job: {},
        FrameDates: {},
        "Frame 483": {},
        ilustration: {},
        "Frame 482": {},
        HeadAdminiHome: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        ImgCol: {},
        Welcome: {},
        Name: {},
        Job: {},
        FrameDates: {},
        "Frame 483": {},
        ilustration: {},
        "Frame 482": { display: "none" },
        HeadAdminiHome: {},
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
      gap="40px"
      direction="row"
      width="1049px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(64,106,191,1)"
      display="flex"
      {...getOverrideProps(overrides, "HeadAdminiHome")}
      {...rest}
    >
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="16px 24px 16px 24px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 483")}
      >
        <Image
          width="116px"
          height="117px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "ImgCol")}
        ></Image>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "FrameDates")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="19.363636016845703px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Hola de nuevo"
            {...getOverrideProps(overrides, "Welcome")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="38.727272033691406px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.17px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Nombre del colaborador"
            {...getOverrideProps(overrides, "Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="21.784090042114258px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="MANAGER HUMAN RELATIONS"
            {...getOverrideProps(overrides, "Job")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="326px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 482")}
      >
        <Ilustration
          width="unset"
          height="155px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ilustration")}
        ></Ilustration>
      </Flex>
    </Flex>
  );
}
