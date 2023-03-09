/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";

import {PDFDownloadLink} from "@react-pdf/renderer";

import PDFConjunto from "../PDFConjunto";

import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, useBreakpointValue } from "@aws-amplify/ui-react";
import { IconProfile } from "../ui-components";
export default function HeadCollaborator(props) {
  const {aniosFill, datosUsuario, testPreguntas, dataBehavior, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        txt: {},
        NameColl: {},
        "Frame 452": {},
        "Icon-Profile38284537": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile38284540": {},
        Job: {},
        "Frame 425": {},
        "Icon-Profile38284543": {},
        Organitation: {},
        "Frame 426": {},
        "Frame 453": {},
        "Frame 457": {},
        ButtonPDF: {},
        HeadCollaborator: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        txt: {},
        NameColl: { shrink: "0", alignSelf: "stretch" },
        "Frame 452": {
          gap: "2px",
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "Icon-Profile38284537": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile38284540": {},
        Job: { shrink: "1", grow: "1", basis: "0" },
        "Frame 425": { shrink: "1", grow: "1", basis: "0" },
        "Icon-Profile38284543": {},
        Organitation: { shrink: "1", grow: "1", basis: "0" },
        "Frame 426": { shrink: "1", grow: "1", basis: "0" },
        "Frame 453": {},
        "Frame 457": { shrink: "0", alignSelf: "stretch" },
        ButtonPDF: { alignSelf: "stretch" },
        HeadCollaborator: {
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
      gap="16px"
      direction="row"
      width="1281px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.25)"
      borderRadius="4px"
      padding="12px 24px 12px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "HeadCollaborator")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 457")}
      >
        <Flex
          gap="12px"
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
          {...getOverrideProps(overrides, "Frame 452")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="300"
            color="rgba(0,0,0,0.8)"
            lineHeight="25px"
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
            children="Evaluación de: "
            {...getOverrideProps(overrides, "txt")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="500"
            color="rgba(0,0,0,0.8)"
            lineHeight="25px"
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
            children="Zurita Robles, Kadir"
            {...getOverrideProps(overrides, "NameColl")}
          ></Text>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 453")}
        >
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 423")}
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
              {...getOverrideProps(overrides, "Icon-Profile38284537")}
            ></IconProfile>
            <Text
              fontFamily="Inter"
              fontSize="10px"
              fontWeight="500"
              color="rgba(0,0,0,0.8)"
              lineHeight="12.5px"
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
              children=" 2786036"
              {...getOverrideProps(overrides, "Id")}
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
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 425")}
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
              {...getOverrideProps(overrides, "Icon-Profile38284540")}
            ></IconProfile>
            <Text
              fontFamily="Inter"
              fontSize="10px"
              fontWeight="500"
              color="rgba(0,0,0,0.8)"
              lineHeight="12.5px"
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
              children="Delivery Presale"
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
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 426")}
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
              {...getOverrideProps(overrides, "Icon-Profile38284543")}
            ></IconProfile>
            <Text
              fontFamily="Inter"
              fontSize="10px"
              fontWeight="500"
              color="rgba(0,0,0,0.8)"
              lineHeight="12.5px"
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
              children="Organización Bimbo Brasil"
              {...getOverrideProps(overrides, "Organitation")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <PDFDownloadLink document={<PDFConjunto DATOS={testPreguntas} anios={aniosFill} datosUsuario={datosUsuario} comportamientos={dataBehavior}/>} fileName={`Evalución_de_desempeño_potencial.pdf`}>
      <Button
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Descargar todo PDF"
        {...getOverrideProps(overrides, "ButtonPDF")}
      ></Button>
      </PDFDownloadLink>
    </Flex>
  );
}
