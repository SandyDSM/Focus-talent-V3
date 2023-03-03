/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField } from "@aws-amplify/ui-react";
import Page2Arrow from "./Page2Arrow";
import PageArrow from "./PageArrow";
import Page from "./Page";
export default function CountSelect(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="418px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CountSelect")}
      {...rest}
    >
      <SelectField
        width="unset"
        height="unset"
        placeholder="Resultados por página: 9"
        grow="1"
        shrink="1"
        basis="0"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Cont-barra")}
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
          {...getOverrideProps(overrides, "Page2Arrow38334443")}
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
          {...getOverrideProps(overrides, "PageArrow38334444")}
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
          {...getOverrideProps(overrides, "Page38334445")}
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
          {...getOverrideProps(overrides, "Page38334446")}
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
          {...getOverrideProps(overrides, "Page38334447")}
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
          {...getOverrideProps(overrides, "PageArrow38334448")}
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
          {...getOverrideProps(overrides, "Page2Arrow38334449")}
        ></Page2Arrow>
      </Flex>
    </Flex>
  );
}
