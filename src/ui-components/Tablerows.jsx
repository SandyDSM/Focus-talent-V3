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
import IconNotification from "./IconNotification";
import { Divider, Flex, SwitchField, Text } from "@aws-amplify/ui-react";
export default function Tablerows(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "icon-Notification": {},
        SwitchField: {},
        FrameSwitch: {},
        Text: {},
        Year: {},
        "Frame 454": {},
        Divider: {},
        Tablerows: {},
      },
      variantValues: { state: "off" },
    },
    {
      overrides: {
        "icon-Notification": {},
        SwitchField: { defaultChecked: "true", isDisabled: "false" },
        FrameSwitch: { justifyContent: "flex-start", alignItems: "flex-start" },
        Text: {},
        Year: {},
        "Frame 454": {},
        Divider: {},
        Tablerows: {},
      },
      variantValues: { state: "active" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="4px"
      direction="column"
      width="1233px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Tablerows")}
      {...rest}
    >
      <Flex
        gap="70px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="4px 36px 4px 36px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 454")}
      >
        <IconNotification
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
          disabled="True"
          {...getOverrideProps(overrides, "icon-Notification")}
        ></IconNotification>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="2px 0px 2px 0px"
          display="flex"
          {...getOverrideProps(overrides, "FrameSwitch")}
        >
          <SwitchField
            label="Off"
            shrink="0"
            size="default"
            defaultChecked={false}
            isDisabled={true}
            labelPosition="end"
            {...getOverrideProps(overrides, "SwitchField")}
          ></SwitchField>
        </Flex>
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
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Evaluación de desempeño y sucesión “Lorem ipsum dolor sit amet consectetur”"
          {...getOverrideProps(overrides, "Text")}
        ></Text>
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
          children="2022"
          {...getOverrideProps(overrides, "Year")}
        ></Text>
      </Flex>
      <Divider
        width="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
