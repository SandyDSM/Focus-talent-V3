/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Iconidiom from "./Iconidiom";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
import IconActions from "./IconActions";
export default function RowsNotif(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RowsNotif")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="4px 24px 4px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 454")}
      >
        <Flex
          gap="48px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 466")}
        >
          <Iconidiom
            display="flex"
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="1px"
            padding="7px 2px 7px 2px"
            backgroundColor="rgba(100,145,237,1)"
            language="esp"
            {...getOverrideProps(overrides, "icon-idiom")}
          ></Iconidiom>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Notificación Talent Lorem ipsum dolor sit amet consectetur"
            {...getOverrideProps(
              overrides,
              "Notificaci\u00F3n Talent Lorem ipsum dolor sit amet consectetur"
            )}
          ></Text>
        </Flex>
        <Flex
          gap="48px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 465")}
        >
          <IconActions
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
            name="edit"
            {...getOverrideProps(overrides, "Icon-Actions35103185")}
          ></IconActions>
          <IconActions
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
            name="delete"
            {...getOverrideProps(overrides, "Icon-Actions35103135")}
          ></IconActions>
        </Flex>
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
  );
}
