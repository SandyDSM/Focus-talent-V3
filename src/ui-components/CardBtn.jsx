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
import FlatIcons from "./FlatIcons";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CardBtn(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { FlatIcons: {}, Title: {}, CardBtn: {} },
      variantValues: { type: "Evaluaciones" },
    },
    {
      overrides: {
        FlatIcons: { type: "notf" },
        Title: {},
        CardBtn: { backgroundColor: "rgba(103,160,203,1)" },
      },
      variantValues: { type: "Notificaciones" },
    },
    {
      overrides: {
        FlatIcons: { type: "tags" },
        Title: {},
        CardBtn: { backgroundColor: "rgba(159,187,244,1)" },
      },
      variantValues: { type: "Etiquetas" },
    },
    {
      overrides: {
        FlatIcons: { type: "team" },
        Title: {},
        CardBtn: { backgroundColor: "rgba(38,72,140,1)" },
      },
      variantValues: { type: "Equipo" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="row"
      width="450px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="20px"
      padding="0px 12px 0px 0px"
      backgroundColor="rgba(191,128,64,1)"
      display="flex"
      {...getOverrideProps(overrides, "CardBtn")}
      {...rest}
    >
      <FlatIcons
        width="130px"
        height="124.01px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="eval"
        {...getOverrideProps(overrides, "FlatIcons")}
      ></FlatIcons>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="74px"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Evaluaciones de desempeño y sucesión"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
    </Flex>
  );
}
