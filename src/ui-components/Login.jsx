/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image } from "@aws-amplify/ui-react";
export default function Login(props) {
  const { frameInputs, overrides, ...rest } = props;
  return (
    <Flex
      gap="48px"
      direction="column"
      width="379px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="48px 24px 48px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="117px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 20px 0px 20px"
        {...getOverrideProps(overrides, "FrameImage")}
      >
        <Image
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
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "logoImg")}
        ></Image>
      </Flex>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        children={frameInputs}
        {...getOverrideProps(overrides, "FrameInputs")}
      ></Flex>
      <Flex
        gap="20px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FrameButtons")}
      >
        <Button
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Iniciar sesión"
          {...getOverrideProps(overrides, "ButtonSingIn")}
        ></Button>
        <Button
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="default"
          children="SSO Login"
          {...getOverrideProps(overrides, "ButtonSingAzure")}
        ></Button>
        <Button
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="link"
          children="Olvidé  mi contraseña"
          {...getOverrideProps(overrides, "ButtonForgot")}
        ></Button>
      </Flex>
    </Flex>
  );
}
