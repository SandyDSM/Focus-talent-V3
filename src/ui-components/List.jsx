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
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function List(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        placeholder: {},
        Icon: {},
        Input: {},
        border: {},
        InputGroup: {},
        List: {},
      },
      variantValues: { name: "Down" },
    },
    {
      overrides: {
        placeholder: {},
        Icon: {},
        Input: {},
        border: {},
        InputGroup: {},
        List: {},
      },
      variantValues: { name: "up" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="column"
      width="311px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "List")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "InputGroup")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="8px 16px 8px 16px"
          display="flex"
          {...getOverrideProps(overrides, "Input")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(128,128,128,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
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
            children="PUESTO"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
          <Icon
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
            type="chevron_down"
            fontSize="24px"
            {...getOverrideProps(overrides, "Icon")}
          ></Icon>
        </Flex>
        <Icon
          width="unset"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 311, height: 1 }}
          paths={[
            {
              d: "M0 0L311 0L311 -1L0 -1L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "border")}
        ></Icon>
      </Flex>
    </Flex>
  );
}
