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
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import IconProfile from "./IconProfile";
export default function PerformanceTest(props) {
  const { overrides: overridesProp, ...restProp } = props;
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
            children="Evaluación de desempeño 2021"
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
          children="Q1: What does the associate need to do better?"
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
          children="La administración de sistema de flota, completar ordenes de trabajo, subir en tiempo y forma los reportes a  (GB Fleet) sustentabilidad, aplicación del tarjetón de mantenimientos."
          {...getOverrideProps(overrides, "answerQone38284685")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "qOneOne")}
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
          children="Q1: What is the associate doing well? "
          {...getOverrideProps(overrides, "questionOne38284687")}
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
          children="Apego a procedimientos de compras, y seguimiento al funcionamiento de la flota, ejecución del cambio de imagen."
          {...getOverrideProps(overrides, "answerQone38284688")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "qTwo")}
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
          children="Q2: What does the associate need to do better?"
          {...getOverrideProps(overrides, "questionTwo38284690")}
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
          children="Trabajar en el programa de mantenimiento preventivo, mayor sentido de urgencia para la resolución de reportes en Bitácora, apego a procedimiento internos."
          {...getOverrideProps(overrides, "answerTwo38284691")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "qTwoTwo")}
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
          children="Q2: What is the associate doing well?"
          {...getOverrideProps(overrides, "questionTwo38284693")}
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
          children="Cambio de imagen del taller y flotilla, seguimiento al funcionamiento de la flota, aplicación del tarjetón de mantenimiento."
          {...getOverrideProps(overrides, "answerTwo38284694")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "qThree")}
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
          children="Q3: What does the associate need to do better?"
          {...getOverrideProps(overrides, "questionThree38284696")}
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
          children="Mayor sentido de urgencia para la resolución de reportes en Bitácora, disminuir la tasa de auxilios, mayor empoderamiento para la resolución de problemas."
          {...getOverrideProps(overrides, "answerThree38284697")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "qThreeThree")}
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
          children="Q3: What is the associate doing well?"
          {...getOverrideProps(overrides, "questionThree38284699")}
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
          children="Cambio de imagen del taller y flotilla, seguimiento al funcionamiento de la flota, aplicación del tarjetón de mantenimiento, Mantenimiento preventivos en tiempos, Seguimiento para el proyecto 5´S."
          {...getOverrideProps(overrides, "answerThree38284700")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 0px 10px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 13973")}
      >
        <Button
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Descargar  PDF"
          {...getOverrideProps(overrides, "ButtonPDF")}
        ></Button>
      </Flex>
    </Flex>
  );
}
