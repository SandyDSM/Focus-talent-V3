/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";

import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";

import PDFPotencial from "../PDFPotencial";

import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { IconProfile } from "../ui-components";

import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

export default function SuccesionTest(props) {
  const {
    datosUsuario,
    arrayPreguntas,
    anios,
    overrides: overridesProp,
    ...restProp
  } = props;
  const testPreguntas = arrayPreguntas;

  //console.log("AQUI",testPreguntas)

  const { potReview, downloadPDF, noData } = useContext(CollaboratorsContext);

  const thisYear = testPreguntas?.filter((c) => c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios);

  const variants = [
    {
      overrides: {
        "image 4": {},
        Users: {},
        Heading: {},
        nameColl: {},
        "Icon-Profile38284862": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile38284865": {},
        Job: {},
        "Frame 425": {},
        "Icon-Profile38284868": {},
        Organitation: {},
        FrameOrganitation: {},
        FrameData: {},
        "Frame 46838284857": {},
        "Frame 458": {},
        Divider38284719: {},
        PerformanceCalibration: {},
        total: {},
        "Frame 459": {},
        Divider38284723: {},
        "Mental agility": {},
        answerMental: {},
        "Frame 460": {},
        "People agility": {},
        answerPeople: {},
        "Frame 461": {},
        "Self-awareness": {},
        answerSelf: {},
        "Frame 464": {},
        "Frame 13965": {},
        "Change agility": {},
        answerChange: {},
        "Frame 462": {},
        "Results agility": {},
        answerAgility: {},
        "Frame 463": {},
        "Frame 13966": {},
        "Frame 13964": {},
        "Frame 13971": {},
        Divider38284743: {},
        "LEADERSHIP PREDICTOR: Manages uncertainty effectively": {},
        answerManages: {},
        "Frame 465": {},
        "LEADERSHIP PREDICTOR: Feels comfortable guiding and leading others":
          {},
        answerFeels: {},
        "Frame 466": {},
        "LEADERSHIP PREDICTOR: Focuses on growing the business through others":
          {},
        answerFocuses: {},
        "Frame 467": {},
        "Frame 13968": {},
        Divider38284754: {},
        "DERAILER: Closed": {},
        "Not Shown38284758": {},
        "Frame 46838284756": {},
        "DERAILER: Volatile": {},
        "Not Shown38284761": {},
        "Frame 469": {},
        "DERAILER: Micro-management": {},
        "Not Shown38284764": {},
        "Frame 470": {},
        "Frame 13967": {},
        Divider38284765: {},
        Readiness: {},
        "Mid-term (1-3 years)": {},
        "Frame 471": {},
        "Future scenario": {},
        answerScnario: {},
        "Frame 472": {},
        "Flight risk": {},
        Medium: {},
        "Frame 473": {},
        "Frame 13972": {},
        Divider38284776: {},
        "Potential Map": {},
        answerMap: {},
        "Frame 474": {},
        "Potential leadership strengths": {},
        answerPotencial: {},
        "Frame 475": {},
        "Potential leadership opportunity areas": {},
        answerPotencialAreas: {},
        "Frame 476": {},
        "Frame 13969": {},
        Divider38284787: {},
        "Development actions (70-20-10)": {},
        answerDevelop: {},
        "Frame 477": {},
        Button: {},
        "Frame 13974": {},
        SuccesionTest: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "image 4": {},
        Users: {},
        Heading: { level: "5" },
        nameColl: {},
        "Icon-Profile38284862": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile38284865": {},
        Job: { shrink: "1", grow: "1", basis: "0" },
        "Frame 425": { width: "689px" },
        "Icon-Profile38284868": {},
        Organitation: {},
        FrameOrganitation: { shrink: "0", alignSelf: "stretch" },
        FrameData: {
          gap: "2px",
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "Frame 46838284857": {},
        "Frame 458": { alignItems: "flex-start" },
        Divider38284719: {},
        PerformanceCalibration: {},
        total: {},
        "Frame 459": {},
        Divider38284723: {},
        "Mental agility": {},
        answerMental: {},
        "Frame 460": {},
        "People agility": {},
        answerPeople: {},
        "Frame 461": {},
        "Self-awareness": {},
        answerSelf: {},
        "Frame 464": {},
        "Frame 13965": { shrink: "0", alignSelf: "stretch" },
        "Change agility": {},
        answerChange: {},
        "Frame 462": {},
        "Results agility": {},
        answerAgility: {},
        "Frame 463": {},
        "Frame 13966": { shrink: "0", alignSelf: "stretch" },
        "Frame 13964": { direction: "column" },
        "Frame 13971": {},
        Divider38284743: {},
        "LEADERSHIP PREDICTOR: Manages uncertainty effectively": {
          alignSelf: "stretch",
        },
        answerManages: { shrink: "0", alignSelf: "stretch" },
        "Frame 465": {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "LEADERSHIP PREDICTOR: Feels comfortable guiding and leading others": {
          alignSelf: "stretch",
        },
        answerFeels: { shrink: "0", alignSelf: "stretch" },
        "Frame 466": {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "LEADERSHIP PREDICTOR: Focuses on growing the business through others":
          {},
        answerFocuses: {},
        "Frame 467": {},
        "Frame 13968": {},
        Divider38284754: {},
        "DERAILER: Closed": {},
        "Not Shown38284758": {},
        "Frame 46838284756": {},
        "DERAILER: Volatile": {},
        "Not Shown38284761": {},
        "Frame 469": {},
        "DERAILER: Micro-management": {},
        "Not Shown38284764": {},
        "Frame 470": { shrink: "0", alignSelf: "stretch" },
        "Frame 13967": { direction: "column" },
        Divider38284765: {},
        Readiness: {},
        "Mid-term (1-3 years)": {},
        "Frame 471": {},
        "Future scenario": {},
        answerScnario: { shrink: "0", alignSelf: "stretch" },
        "Frame 472": { direction: "column" },
        "Flight risk": {},
        Medium: {},
        "Frame 473": {},
        "Frame 13972": {},
        Divider38284776: {},
        "Potential Map": {},
        answerMap: {},
        "Frame 474": {},
        "Potential leadership strengths": {},
        answerPotencial: {},
        "Frame 475": {},
        "Potential leadership opportunity areas": {},
        answerPotencialAreas: {},
        "Frame 476": {},
        "Frame 13969": {},
        Divider38284787: {},
        "Development actions (70-20-10)": {},
        answerDevelop: {},
        "Frame 477": {},
        Button: { alignSelf: "stretch" },
        "Frame 13974": {},
        SuccesionTest: { padding: "24px 12px 24px 12px" },
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
    overridesProp || {},
  );

  return (
    <Flex
      gap="20px"
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
      {...getOverrideProps(overrides, "SuccesionTest")}
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
            {...getOverrideProps(overrides, "image 4")}
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
          {...getOverrideProps(overrides, "Frame 46838284857")}
        >
          <Heading
            shrink="0"
            alignSelf="stretch"
            level="4"
            children={`${potReview} ${anios}`}
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
            {...getOverrideProps(overrides, "FrameData")}
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
                {...getOverrideProps(overrides, "Icon-Profile38284862")}
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
                {...getOverrideProps(overrides, "Icon-Profile38284865")}
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
                {...getOverrideProps(overrides, "Icon-Profile38284868")}
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
        width="100%"
        shrink="0"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider38284719")}
      ></Divider>
      {thisYear.length > 0 ? (
        <div className="w-full">
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 13971")}
          >
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Agilidad mental",
              )
              .map((pre) => (
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
                  {...getOverrideProps(overrides, "Frame 460")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "Mental agility")}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerMental")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Agilidad de personas",
              )
              .map((pre) => (
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
                  {...getOverrideProps(overrides, "Frame 461")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "People agility")}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerPeople")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Consciencia de sí mismo",
              )
              .map((pre) => (
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
                  {...getOverrideProps(overrides, "Frame 464")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "Self-awareness")}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerSelf")}
                  ></Text>
                </Flex>
              ))}
            <Flex
              gap="16px"
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
              {...getOverrideProps(overrides, "Frame 13966")}
            >
              {testPreguntas
                ?.filter(
                  (c) =>
                    c.CATEGORIA === "Potencial" &&
                    c.ANO_EVAL === anios &&
                    c.AGRUPACION === "Agilidad de cambio",
                )
                .map((pre) => (
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
                    {...getOverrideProps(overrides, "Frame 462")}
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
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.TITULO}
                      {...getOverrideProps(overrides, "Change agility")}
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
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.VALORES}
                      {...getOverrideProps(overrides, "answerChange")}
                    ></Text>
                  </Flex>
                ))}
              {testPreguntas
                ?.filter(
                  (c) =>
                    c.CATEGORIA === "Potencial" &&
                    c.ANO_EVAL === anios &&
                    c.AGRUPACION === "Agilidad de resultados",
                )
                .map((pre) => (
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
                    {...getOverrideProps(overrides, "Frame 463")}
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
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.TITULO}
                      {...getOverrideProps(overrides, "Results agility")}
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
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.VALORES}
                      {...getOverrideProps(overrides, "answerAgility")}
                    ></Text>
                  </Flex>
                ))}
            </Flex>
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 13968")}
          >
            <Flex
              gap="12px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 465")}
            >
              {testPreguntas
                ?.filter(
                  (c) =>
                    c.CATEGORIA === "Potencial" &&
                    c.ANO_EVAL === anios &&
                    c.AGRUPACION ===
                      "PREDICTOR DE LIDERAZGO: Maneja con eficacia la incertidumbre",
                )
                .map((pre) => (
                  <>
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
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.TITULO}
                      {...getOverrideProps(
                        overrides,
                        "LEADERSHIP PREDICTOR: Manages uncertainty effectively",
                      )}
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
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.VALORES}
                      {...getOverrideProps(overrides, "answerManages")}
                    ></Text>
                  </>
                ))}
            </Flex>
            <Flex
              gap="12px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 466")}
            >
              {testPreguntas
                ?.filter(
                  (c) =>
                    c.CATEGORIA === "Potencial" &&
                    c.ANO_EVAL === anios &&
                    c.AGRUPACION ===
                      "PREDICTOR DE LIDERAZGO: Se siente cómodo guiando y dirigiendo a otros",
                )
                .map((pre) => (
                  <>
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
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.TITULO}
                      {...getOverrideProps(
                        overrides,
                        "LEADERSHIP PREDICTOR: Feels comfortable guiding and leading others",
                      )}
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
                      grow="1"
                      shrink="1"
                      basis="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children={pre.VALORES}
                      {...getOverrideProps(overrides, "answerFeels")}
                    ></Text>
                  </>
                ))}
            </Flex>
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION ===
                    "PREDICTOR DE LIDERAZGO: Se enfoca en hacer crecer el negocio a través de otros",
              )
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
                  {...getOverrideProps(overrides, "Frame 467")}
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
                    children={pre.TITULO}
                    {...getOverrideProps(
                      overrides,
                      "LEADERSHIP PREDICTOR: Focuses on growing the business through others",
                    )}
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
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerFocuses")}
                  ></Text>
                </Flex>
              ))}
          </Flex>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="space-between"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13967")}
          >
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "DESCARRILADOR: Cerrado",
              )
              .map((pre) => (
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 46838284756")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "DERAILER: Closed")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "Not Shown38284758")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "DESCARRILADOR: Volátil",
              )
              .map((pre) => (
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 469")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "DERAILER: Volatile")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "Not Shown38284761")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "DESCARRILADOR: Micro-gestión",
              )
              .map((pre) => (
                <Flex
                  gap="12px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="left"
                  grow="1"
                  shrink="1"
                  basis="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 470")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(
                      overrides,
                      "DERAILER: Micro-management",
                    )}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "Not Shown38284764")}
                  ></Text>
                </Flex>
              ))}
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 13972")}
          >
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Promovible",
              )
              .map((pre) => (
                <Flex
                  gap="12px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 471")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "Readiness")}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "Mid-term (1-3 years)")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Escenario Futuro",
              )
              .map((pre) => (
                <Flex
                  gap="12px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 472")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "Future scenario")}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerScnario")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Riesgo de pérdida",
              )
              .map((pre) => (
                <Flex
                  gap="12px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  shrink="0"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 473")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "Flight risk")}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "Medium")}
                  ></Text>
                </Flex>
              ))}
          </Flex>
          <Flex
            gap="16px"
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
            {...getOverrideProps(overrides, "Frame 13969")}
          >
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Mapa de potencial",
              )
              .map((pre) => (
                <Flex
                  gap="12px"
                  direction="row"
                  width="848px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 474")}
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
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.TITULO}
                    {...getOverrideProps(overrides, "Potential Map")}
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
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerMap")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Fortalezas",
              )
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
                  {...getOverrideProps(overrides, "Frame 475")}
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
                    children={pre.TITULO}
                    {...getOverrideProps(
                      overrides,
                      "Potential leadership strengths",
                    )}
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
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerPotencial")}
                  ></Text>
                </Flex>
              ))}
            {testPreguntas
              ?.filter(
                (c) =>
                  c.CATEGORIA === "Potencial" &&
                  c.ANO_EVAL === anios &&
                  c.AGRUPACION === "Áreas de oportunidad",
              )
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
                  {...getOverrideProps(overrides, "Frame 476")}
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
                    children={pre.TITULO}
                    {...getOverrideProps(
                      overrides,
                      "Potential leadership opportunity areas",
                    )}
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
                    children={pre.VALORES}
                    {...getOverrideProps(overrides, "answerPotencialAreas")}
                  ></Text>
                </Flex>
              ))}
          </Flex>
          {testPreguntas
            ?.filter(
              (c) =>
                c.CATEGORIA === "Potencial" &&
                c.ANO_EVAL === anios &&
                c.AGRUPACION === "Acciones de desarrollo",
            )
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
                {...getOverrideProps(overrides, "Frame 477")}
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
                  children={pre.TITULO}
                  {...getOverrideProps(
                    overrides,
                    "Development actions (70-20-10)",
                  )}
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
                  children={pre.VALORES}
                  {...getOverrideProps(overrides, "answerDevelop")}
                ></Text>
              </Flex>
            ))}
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
            {...getOverrideProps(overrides, "Frame 13974")}
          >
            <PDFDownloadLink
              document={
                <PDFPotencial
                  DATOS={testPreguntas}
                  anios={anios}
                  datosUsuario={datosUsuario}
                  etiquetas={potReview}
                />
              }
              fileName={`Evaluación_de_potencial_${anios}.pdf`}
            >
              <Button
                shrink="0"
                size="small"
                isDisabled={false}
                variation="primary"
                children={downloadPDF}
                {...getOverrideProps(overrides, "Button")}
              ></Button>
            </PDFDownloadLink>
          </Flex>
        </div>
      ) : (
        <div className="w-full">
          <p>{noData}</p>
        </div>
      )}
    </Flex>
  );
}
