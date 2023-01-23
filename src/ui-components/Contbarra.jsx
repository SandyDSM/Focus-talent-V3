/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Page2Arrow from "./Page2Arrow";
import PageArrow from "./PageArrow";
import Page from "./Page";
import { Flex } from "@aws-amplify/ui-react";
export default function Contbarra(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="2px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Contbarra")}
      {...rest}
    >
      <Page2Arrow
        display="flex"
        gap="0"
        direction="row"
        width="23px"
        height="23px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 10px 0px 10px"
        type="2Back"
        {...getOverrideProps(overrides, "Page2Arrow34652790")}
      ></Page2Arrow>
      <PageArrow
        display="flex"
        gap="10px"
        direction="column"
        width="23px"
        height="23px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 6px 10px 6px"
        type="Back"
        {...getOverrideProps(overrides, "PageArrow34662792")}
      ></PageArrow>
      <Page
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 8px 0px 8px"
        type="active"
        {...getOverrideProps(overrides, "Page34662797")}
      ></Page>
      <Page
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 8px 0px 8px"
        backgroundColor="rgba(188,211,228,1)"
        type="default"
        {...getOverrideProps(overrides, "Page34662799")}
      ></Page>
      <Page
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 8px 0px 8px"
        backgroundColor="rgba(188,211,228,1)"
        type="default"
        {...getOverrideProps(overrides, "Page34662801")}
      ></Page>
      <PageArrow
        display="flex"
        gap="10px"
        direction="column"
        width="23px"
        height="23px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        type="Go"
        {...getOverrideProps(overrides, "PageArrow34662803")}
      ></PageArrow>
      <Page2Arrow
        display="flex"
        gap="0"
        direction="row"
        width="23px"
        height="23px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        type="2Go"
        {...getOverrideProps(overrides, "Page2Arrow34662805")}
      ></Page2Arrow>
    </Flex>
  );
}
