/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import PDFdesempeno from "../PDFDesenpeno.js";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import IconProfile from "../ui-components/IconProfile";
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
import preguntas from "./bodypreguntas";

export default function PerformanceTest(props) {
  const {
    datosUsuario,
    arrayPreguntas,
    anios,
    overrides: overridesProp,
    ...restProp
  } = props;

  const testPreguntas = arrayPreguntas;

  console.log("El año es:" + anios);

  const variants = [
    {
      overrides: {
        Profile: {},
        Users: {},
        Heading: {},
        nameColl: {},
        "Icon-Profile38284846": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile38284849": {},
        Job: {},
        "Frame 425": {},
        "Icon-Profile38284852": {},
        Organitation: {},
        FrameOrganitation: {},
        FrameDat: {},
        "Frame 467": {},
        "Frame 458": {},
        Divider: {},

        PREGUNTAS: {},

        questionOne38284684: {},
        answerQone38284685: {},
        qOne: {},
        questionOne38284687: {},
        answerQone38284688: {},
        qOneOne: {},
        questionTwo38284690: {},
        answerTwo38284691: {},
        qTwo: {},
        questionTwo38284693: {},
        answerTwo38284694: {},
        qTwoTwo: {},
        questionThree38284696: {},
        answerThree38284697: {},
        qThree: {},
        questionThree38284699: {},
        answerThree38284700: {},
        qThreeThree: {},
        ButtonPDF: {},
        "Frame 13973": {},
        PerformanceTest: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        Profile: {},
        Users: {},
        Heading: { level: "5" },
        nameColl: {},
        "Icon-Profile38284846": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile38284849": {},
        Job: { shrink: "1", grow: "1", basis: "0" },
        "Frame 425": { width: "689px" },
        "Icon-Profile38284852": {},
        Organitation: {},
        FrameOrganitation: { shrink: "0", alignSelf: "stretch" },
        FrameDat: {
          gap: "2px",
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "Frame 467": {},
        "Frame 458": { alignItems: "flex-start" },
        Divider: {},
        questionOne38284684: {},
        answerQone38284685: {},
        qOne: {},
        questionOne38284687: {},
        answerQone38284688: {},
        qOneOne: {},
        questionTwo38284690: {},
        answerTwo38284691: {},
        qTwo: {},
        questionTwo38284693: {},
        answerTwo38284694: {},
        qTwoTwo: {},
        questionThree38284696: {},
        answerThree38284697: {},
        qThree: {},
        questionThree38284699: {},
        answerThree38284700: {},
        qThreeThree: {},
        ButtonPDF: { alignSelf: "stretch" },
        "Frame 13973": {},
        PerformanceTest: { padding: "24px 12px 24px 12px" },
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
      direction="column"
      width="896px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "PerformanceTest")}
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
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 458")}
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
          {...getOverrideProps(overrides, "Users")}
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
            {...getOverrideProps(overrides, "Profile")}
          ></Image>
        </Flex>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 467")}
        >
          <Heading
            shrink="0"
            alignSelf="stretch"
            level="4"
            children={`Evaluación de desempeño ${anios}`}
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,0.8)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Zurita Robles, Kadir"
            {...getOverrideProps(overrides, "nameColl")}
          ></Text>
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
            {...getOverrideProps(overrides, "FrameDat")}
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
                {...getOverrideProps(overrides, "Icon-Profile38284846")}
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
                {...getOverrideProps(overrides, "Icon-Profile38284849")}
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
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "FrameOrganitation")}
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
                {...getOverrideProps(overrides, "Icon-Profile38284852")}
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
                grow="1"
                shrink="1"
                basis="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Organización Bimbo Brasil"
                {...getOverrideProps(overrides, "Organitation")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider
        width="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      {console.log("Preguntas",testPreguntas)}
      {testPreguntas
        ?.filter((c) => c.CATEGORIA === "Desempeño" && c.ANO_EVAL === anios)
        .map((pre) => (
          <Flex
            gap="12px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "qOne")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="500"
              color="rgba(0,0,0,0.8)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${pre.TITULO}`}
              {...getOverrideProps(overrides, "questionOne38284684")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,0,0,0.8)"
              lineHeight="17.5px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${pre.VALORES}`}
              {...getOverrideProps(overrides, "answerQone38284685")}
            ></Text>
          </Flex>
        ))}
      {anios === "2022" ? <div className="w-full"><p>No existen datos</p></div> :
      <PDFDownloadLink
        document={
          <PDFdesempeno
            DATOS={testPreguntas}
            anios={anios}
            datosUsuario={datosUsuario}
          />
        }
        fileName={`Evaluación_de_desempeño_${anios}.pdf`}
      >
        <Button
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Descargar  PDF"
          {...getOverrideProps(overrides, "ButtonPDF")}
        ></Button>
      </PDFDownloadLink>
}

      
    </Flex>
  );
}
