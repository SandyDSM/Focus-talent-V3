/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
import Tablerows from "./Tablerows";
export default function Table(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      width="1295px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      padding="0px 48px 0px 48px"
      {...getOverrideProps(overrides, "Table")}
      {...rest}
    >
      <Flex
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
        {...getOverrideProps(overrides, "Frame 461")}
      >
        <Flex
          gap="48px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 36px 0px 0px"
          {...getOverrideProps(overrides, "Group 13955")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(1,97,167,1)"
            lineHeight="16px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.14px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Notificación"
            {...getOverrideProps(overrides, "Status34793227")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(1,97,167,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.14px"
            width="74px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Status"
            {...getOverrideProps(overrides, "Status34993234")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(1,97,167,1)"
            lineHeight="16px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.14px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Nombre"
            {...getOverrideProps(overrides, "Nombre")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="500"
            color="rgba(1,97,167,1)"
            lineHeight="23px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.14px"
            width="45px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Año"
            {...getOverrideProps(overrides, "Monto")}
          ></Text>
        </Flex>
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
      <Tablerows
        display="flex"
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        state="off"
        {...getOverrideProps(overrides, "Tablerows34793281")}
      ></Tablerows>
      <Tablerows
        display="flex"
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        state="off"
        {...getOverrideProps(overrides, "Tablerows35003016")}
      ></Tablerows>
      <Tablerows
        display="flex"
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        state="off"
        {...getOverrideProps(overrides, "Tablerows35003030")}
      ></Tablerows>
    </Flex>
  );
}
