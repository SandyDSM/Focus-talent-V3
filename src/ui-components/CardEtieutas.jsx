/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Divider, Flex, Heading } from "@aws-amplify/ui-react";
import TableEtiqueta from "./TableEtiqueta";
export default function CardEtieutas(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="1280px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CardEtieutas")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 467")}
      >
        <Heading
          width="844px"
          height="unset"
          shrink="0"
          level="6"
          children="Crear etiquetas"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
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
      <TableEtiqueta
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TableEtiqueta")}
      ></TableEtiqueta>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={true}
        variation="primary"
        children="Guardar"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
