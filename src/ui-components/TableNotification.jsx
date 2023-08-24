/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
import RowsNotif from "./RowsNotif";
export default function TableNotification(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="2px"
      direction="column"
      width="654px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TableNotification")}
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
        {...getOverrideProps(overrides, "Frame 458")}
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
          padding="0px 12px 0px 12px"
          {...getOverrideProps(overrides, "Group 13955")}
        >
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 460")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(1,97,167,1)"
              lineHeight="16px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.14px"
              width="53px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Idioma"
              {...getOverrideProps(overrides, "Status")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(1,97,167,1)"
              lineHeight="16px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.14px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Título"
              {...getOverrideProps(overrides, "Nombre")}
            ></Text>
          </Flex>
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 464")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(1,97,167,1)"
              lineHeight="23px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.14px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Editar"
              {...getOverrideProps(overrides, "Monto35103238")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="500"
              color="rgba(1,97,167,1)"
              lineHeight="23px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.14px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Eliminar"
              {...getOverrideProps(overrides, "Monto35103272")}
            ></Text>
          </Flex>
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
      <RowsNotif
        display="flex"
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
        {...getOverrideProps(overrides, "rowsNotif35103191")}
      ></RowsNotif>
      <RowsNotif
        display="flex"
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
        {...getOverrideProps(overrides, "rowsNotif35103205")}
      ></RowsNotif>
      <RowsNotif
        display="flex"
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
        {...getOverrideProps(overrides, "rowsNotif35103219")}
      ></RowsNotif>
    </Flex>
  );
}
