/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Divider, Flex, Heading, Text } from "@aws-amplify/ui-react";
import TableSelect from "./TableSelect";
import Page2Arrow from "./Page2Arrow";
import PageArrow from "./PageArrow";
import Page from "./Page";
export default function ModlConfirmEstructura(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="892px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ModlConfirmEstructura")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 457")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          level="6"
          children="Confirmar el elnvío de notificaciones"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
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
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Se enviarán las notificaciones a las notificaciones a las siguientes estructuras"
        {...getOverrideProps(
          overrides,
          "Se enviar\u00E1n las notificaciones a las notificaciones a las siguientes estructuras"
        )}
      ></Text>
      <TableSelect
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TableSelect")}
      ></TableSelect>
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 430")}
      >
        <Page2Arrow
          display="flex"
          gap="0"
          direction="row"
          width="34px"
          height="33px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 10px 0px 10px"
          type="2Back"
          {...getOverrideProps(overrides, "Page2Arrow35594746")}
        ></Page2Arrow>
        <PageArrow
          display="flex"
          gap="10px"
          direction="column"
          width="34px"
          height="33px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 6px 10px 6px"
          type="Back"
          {...getOverrideProps(overrides, "PageArrow35594747")}
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
          {...getOverrideProps(overrides, "Page35594748")}
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
          {...getOverrideProps(overrides, "Page35594749")}
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
          {...getOverrideProps(overrides, "Page35594750")}
        ></Page>
        <PageArrow
          display="flex"
          gap="10px"
          direction="column"
          width="34px"
          height="33px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          type="Go"
          {...getOverrideProps(overrides, "PageArrow35594751")}
        ></PageArrow>
        <Page2Arrow
          display="flex"
          gap="0"
          direction="row"
          width="34px"
          height="33px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          type="2Go"
          {...getOverrideProps(overrides, "Page2Arrow35594752")}
        ></Page2Arrow>
      </Flex>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 463")}
      >
        <Button
          width="148px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancelar"
          {...getOverrideProps(overrides, "Button35594754")}
        ></Button>
        <Button
          width="159px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Confirmar"
          {...getOverrideProps(overrides, "Button35594755")}
        ></Button>
      </Flex>
    </Flex>
  );
}
