/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import IconActions from "./IconActions";
import { CheckboxField, Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function RowsRemove(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="715px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RowsRemove")}
      {...rest}
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
        padding="1px 24px 1px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 454")}
      >
        <Flex
          gap="48px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 456")}
        >
          <Flex
            gap="48px"
            direction="row"
            width="380px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 475")}
          >
            <IconActions
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              name="delete"
              {...getOverrideProps(overrides, "Icon-Actions")}
            ></IconActions>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              textTransform="uppercase"
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
              children="BIM CEDIS METROPOLITANO"
              {...getOverrideProps(overrides, "BIM CEDIS METROPOLITANO")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            textTransform="uppercase"
            lineHeight="24px"
            textAlign="right"
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
            children="bca"
            {...getOverrideProps(overrides, "bca")}
          ></Text>
        </Flex>
        <CheckboxField
          width="unset"
          height="unset"
          label="Incluir subordinados"
          justifyContent="flex-end"
          grow="1"
          shrink="1"
          basis="0"
          size="small"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "CheckboxField")}
        ></CheckboxField>
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
