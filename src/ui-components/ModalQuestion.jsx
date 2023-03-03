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
import MyIcon from "./MyIcon";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
export default function ModalQuestion(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcon: {},
        Heading: {},
        "Frame 472": {},
        Button35595832: {},
        Button35595831: {},
        "Frame 463": {},
        ModalQuestion: {},
      },
      variantValues: { state: "Info" },
    },
    {
      overrides: {
        MyIcon: { type: "warning" },
        Heading: {
          children: "\u00BFEstas seguro de eliminar esta notificaci\u00F3n? ",
        },
        "Frame 472": {},
        Button35595832: {
          variation: "primary",
          backgroundColor: "rgba(191,64,64,1)",
          children: "Eliminar",
        },
        Button35595831: { variation: "default", children: "Conservar" },
        "Frame 463": {},
        ModalQuestion: {},
      },
      variantValues: { state: "Alert" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="column"
      width="565px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "ModalQuestion")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 472")}
      >
        <MyIcon
          width="48px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="info"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Heading
          width="unset"
          height="unset"
          grow="1"
          shrink="1"
          basis="0"
          level="5"
          children="¿Pregunta? "
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
      </Flex>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 463")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancelar"
          {...getOverrideProps(overrides, "Button35595832")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Aceptar"
          {...getOverrideProps(overrides, "Button35595831")}
        ></Button>
      </Flex>
    </Flex>
  );
}
