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
import {
  Flex,
  SearchField,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import Iconteam from "./Iconteam";
import { useContext,  } from "react";
import CollaboratorsContext from "../context/collaborators";
export default function HeadTeamFrom(props) {
  const{busqueda, teamFrom} =useContext(CollaboratorsContext)
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "Icon-team": {},
        txt: {},
        "Frame 13975": {},
        nameColl: {},
        SearchField: {},
        HeadTeamFrom: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "Icon-team": {},
        txt: {},
        "Frame 13975": {},
        nameColl: { shrink: "0", alignSelf: "stretch" },
        SearchField: { alignSelf: "stretch" },
        HeadTeamFrom: {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="12px"
      direction="row"
      width="1280px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.25)"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "HeadTeamFrom")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 13975")}
      >
        <Iconteam
          width="30px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          state="Default"
          {...getOverrideProps(overrides, "Icon-team")}
        ></Iconteam>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="300"
          color="rgba(0,0,0,0.8)"
          lineHeight="30px"
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
          children={teamFrom}
          {...getOverrideProps(overrides, "txt")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,0.8)"
        lineHeight="30px"
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
        children="Juárez Pérez, Ivan "
        {...getOverrideProps(overrides, "nameColl")}
      ></Text>
      <SearchField
        width="unset"
        height="unset"
        placeholder= {busqueda}
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
    </Flex>
  );
}
