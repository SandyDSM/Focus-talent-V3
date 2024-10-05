/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, View } from "@aws-amplify/ui-react";
import Login from "./Login";
export default function LoginPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="1280px"
      height="832px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 40px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="832px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          {...getOverrideProps(overrides, "Group 28")}
        >
          <Image
            width="832px"
            height="832px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image 2")}
          ></Image>
          <View
            width="832px"
            height="415.52px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="832px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1), rgba(255,255,255,0))"
            {...getOverrideProps(overrides, "Rectangle 17")}
          ></View>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 481")}
      >
        <Login
          display="flex"
          gap="48px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="48px 24px 48px 24px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Login")}
        ></Login>
      </Flex>
    </Flex>
  );
}
