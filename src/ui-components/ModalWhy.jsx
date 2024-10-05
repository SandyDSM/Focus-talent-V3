/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Heading,
  TextAreaField,
} from "@aws-amplify/ui-react";
export default function ModalWhy(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="892px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ModalWhy")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 457")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 467")}
        >
          <Heading
            width="844px"
            height="unset"
            shrink="0"
            level="6"
            children="Deshabilitar evaluación"
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Divider
            width="844px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
        </Flex>
        <TextAreaField
          width="unset"
          height="unset"
          label="Escribe el motivo por el cuál deseas deshabilitar esta evaluación"
          placeholder="Escribe el motivo aquí."
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextAreaField")}
        ></TextAreaField>
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
        {...getOverrideProps(overrides, "Frame 463")}
      >
        <Button
          width="148px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancelar"
          {...getOverrideProps(overrides, "Button35595152")}
        ></Button>
        <Button
          width="159px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Deshabilitar"
          {...getOverrideProps(overrides, "Button35595153")}
        ></Button>
      </Flex>
    </Flex>
  );
}
