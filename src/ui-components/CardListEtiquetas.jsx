/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Heading } from "@aws-amplify/ui-react";
import TableEtiquetas from "./TableEtiquetas";
export default function CardListEtiquetas(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="1120px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CardListEtiquetas")}
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
          children="Etiquetas"
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
      <TableEtiquetas
        display="flex"
        gap="2px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TableEtiquetas")}
      ></TableEtiquetas>
    </Flex>
  );
}
