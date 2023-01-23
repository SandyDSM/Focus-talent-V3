/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import List from "./List";
export default function FiltersDefault(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="14px"
      direction="column"
      width="264px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="24px 12px 24px 12px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FiltersDefault")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 12px 0px 12px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
          color="rgba(0,0,0,0.8)"
          lineHeight="25px"
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
          children="FILTROS"
          {...getOverrideProps(overrides, "FILTROS")}
        ></Text>
      </Flex>
      <List
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        name="Down"
        {...getOverrideProps(overrides, "List34663348")}
      ></List>
      <List
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        name="Down"
        {...getOverrideProps(overrides, "List34663355")}
      ></List>
    </Flex>
  );
}
