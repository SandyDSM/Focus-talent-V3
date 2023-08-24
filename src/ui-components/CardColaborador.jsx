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
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import IconProfile from "./IconProfile";
import Iconteam from "./Iconteam";
export default function CardColaborador(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        profile: {},
        FramePhoto: {},
        "Icon-Profile37474166": {},
        idEmploy: {},
        FrameId: {},
        "Icon-Profile37474169": {},
        NameCol: {},
        FrameName: {},
        "Icon-Profile37474172": {},
        Job: {},
        FrameLider: {},
        "Icon-Profile37474175": {},
        Organitation: {},
        FrameOrga: {},
        FrameInfo: {},
        "Icon-team": {},
        FrameInfoIc: {},
        CardColaborador: {},
      },
      variantValues: { type: "Default" },
    },
    {
      overrides: {
        profile: {},
        FramePhoto: {},
        "Icon-Profile37474166": {},
        idEmploy: {},
        FrameId: {},
        "Icon-Profile37474169": {},
        NameCol: {},
        FrameName: {},
        "Icon-Profile37474172": {},
        Job: {},
        FrameLider: {},
        "Icon-Profile37474175": {},
        Organitation: {},
        FrameOrga: {},
        FrameInfo: {},
        "Icon-team": { display: "block" },
        FrameInfoIc: {},
        CardColaborador: {},
      },
      variantValues: { type: "More" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="277px"
      height="unset"
      justifyContent="flex-end"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="8px 8px 8px 8px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "CardColaborador")}
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
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "FramePhoto")}
      >
        <Image
          width="92px"
          height="92px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "profile")}
        ></Image>
      </Flex>
      <Flex
        gap="-40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-end"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "FrameInfoIc")}
      >
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 12px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "FrameInfo")}
        >
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "FrameId")}
          >
            <IconProfile
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
              type="id"
              {...getOverrideProps(overrides, "Icon-Profile37474166")}
            ></IconProfile>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="500"
              color="rgba(0,0,0,0.8)"
              lineHeight="15px"
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
              children="12345678"
              {...getOverrideProps(overrides, "idEmploy")}
            ></Text>
          </Flex>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "FrameName")}
          >
            <IconProfile
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
              type="Name"
              {...getOverrideProps(overrides, "Icon-Profile37474169")}
            ></IconProfile>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="300"
              color="rgba(0,0,0,0.8)"
              textTransform="capitalize"
              lineHeight="15px"
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
              children="Karla González Torres"
              {...getOverrideProps(overrides, "NameCol")}
            ></Text>
          </Flex>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "FrameLider")}
          >
            <IconProfile
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
              type="Job"
              {...getOverrideProps(overrides, "Icon-Profile37474172")}
            ></IconProfile>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="300"
              color="rgba(0,0,0,0.8)"
              lineHeight="15px"
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
              children="Lider de RH"
              {...getOverrideProps(overrides, "Job")}
            ></Text>
          </Flex>
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "FrameOrga")}
          >
            <IconProfile
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
              type="Organitation"
              {...getOverrideProps(overrides, "Icon-Profile37474175")}
            ></IconProfile>
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="300"
              color="rgba(0,0,0,0.8)"
              lineHeight="15px"
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
              children="Bimbo México"
              {...getOverrideProps(overrides, "Organitation")}
            ></Text>
          </Flex>
        </Flex>
        <Iconteam
          width="20px"
          height="20px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Active"
          {...getOverrideProps(overrides, "Icon-team")}
        ></Iconteam>
      </Flex>
    </Flex>
  );
}
