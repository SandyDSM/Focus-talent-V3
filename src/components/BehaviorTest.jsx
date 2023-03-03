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
import { PDFDownloadLink } from "@react-pdf/renderer";

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
import RatingStars from "../ui-components/RatingStars";
import PDFComportamientos from "./PDFComportamientos";
export default function BehaviorTest(props) {
  const {
    overrides: overridesProp,
    datosUsuario,
    arrayPreguntas,
    anios,
    ...restProp
  } = props;
  const variants = [
    {
      overrides: {
        "image 4": {},
        Users: {},
        Heading: {},
        nameColl: {},
        "Icon-Profile39504650": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile39504653": {},
        Job: {},
        "Frame 425": {},
        "Icon-Profile39504656": {},
        Organitation: {},
        FrameOrganitation: {},
        FrameData: {},
        "Frame 468": {},
        "Frame 458": {},
        Divider39504658: {},
        "Frame 13978": {},
        PerformanceCalibration39504660: {},
        Divider39504662: {},
        Revisor39504667: {},
        "Clasificaci\u00F3n39504670": {},
        "Frame 460": {},
        answerPeople39504746: {},
        RatingStars39504747: {},
        "Frame 1397739504883": {},
        "Frame 46139504669": {},
        "Frame 1396539504665": {},
        Comentarios39504685: {},
        answerFeels39504689: {},
        "Frame 1396839504683": {},
        "Frame 13979": {},
        Divider39504942: {},
        PerformanceCalibration39504914: {},
        Divider39504915: {},
        Revisor39514553: {},
        "Clasificaci\u00F3n39514554": {},
        "Frame 464": {},
        answerPeople39504921: {},
        RatingStars39504923: {},
        "Frame 1397739504922": {},
        "Frame 46139504920": {},
        answerPeople39504945: {},
        RatingStars39504947: {},
        "Frame 1397739504946": {},
        "Frame 462": {},
        answerPeople39504961: {},
        RatingStars39504963: {},
        "Frame 1397739504962": {},
        "Frame 463": {},
        "Frame 1396539504916": {},
        Comentarios39504926: {},
        answerFeels39504927: {},
        answerFeels39505024: {},
        answerFeels39505025: {},
        answerFeels39505026: {},
        answerFeels39505027: {},
        "Frame 1396839504925": {},
        "Frame 13980": {},
        "Frame 13981": {},
        Button: {},
        "Frame 13974": {},
        BehaviorTest: {},
      },
      variantValues: { breakpoint: "medium" },
    },
    {
      overrides: {
        "image 4": {},
        Users: {},
        Heading: { level: "5" },
        nameColl: {},
        "Icon-Profile39504650": {},
        Id: {},
        "Frame 423": {},
        "Icon-Profile39504653": {},
        Job: { shrink: "1", grow: "1", basis: "0" },
        "Frame 425": { width: "689px" },
        "Icon-Profile39504656": {},
        Organitation: {},
        FrameOrganitation: { shrink: "0", alignSelf: "stretch" },
        FrameData: {
          gap: "2px",
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "Frame 468": {},
        "Frame 458": { alignItems: "flex-start" },
        Divider39504658: {},
        "Frame 13978": {},
        PerformanceCalibration39504660: {},
        Divider39504662: {},
        Revisor39504667: {},
        "Clasificaci\u00F3n39504670": {},
        "Frame 460": {},
        answerPeople39504746: {},
        RatingStars39504747: {},
        "Frame 1397739504883": {},
        "Frame 46139504669": {},
        "Frame 1396539504665": {},
        Comentarios39504685: {},
        answerFeels39504689: {},
        "Frame 1396839504683": {},
        "Frame 13979": {},
        Divider39504942: {},
        PerformanceCalibration39504914: {},
        Divider39504915: {},
        Revisor39514553: {},
        "Clasificaci\u00F3n39514554": {},
        "Frame 464": {},
        answerPeople39504921: {},
        RatingStars39504923: {},
        "Frame 1397739504922": {},
        "Frame 46139504920": {},
        answerPeople39504945: {},
        RatingStars39504947: {},
        "Frame 1397739504946": {},
        "Frame 462": {},
        answerPeople39504961: {},
        RatingStars39504963: {},
        "Frame 1397739504962": {},
        "Frame 463": {},
        "Frame 1396539504916": {},
        Comentarios39504926: {},
        answerFeels39504927: {},
        answerFeels39505024: {},
        answerFeels39505025: {},
        answerFeels39505026: {},
        answerFeels39505027: {},
        "Frame 1396839504925": {},
        "Frame 13980": {},
        "Frame 13981": {},
        Button: {},
        "Frame 13974": {},
        BehaviorTest: { width: "400px" },
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
      gap="24px"
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
      {...getOverrideProps(overrides, "BehaviorTest")}
      {...rest}
    >
      <Flex
        gap="20px"
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
        {...getOverrideProps(overrides, "Frame 13978")}
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
            {...getOverrideProps(overrides, "Frame 468")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              level="4"
              children={`Comportamientos ${anios}`}
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
                  {...getOverrideProps(overrides, "Icon-Profile39504650")}
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
                  {...getOverrideProps(overrides, "Icon-Profile39504653")}
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
                  {...getOverrideProps(overrides, "Icon-Profile39504656")}
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
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider39504658")}
        ></Divider>
      </Flex>
      <Flex
        gap="32px"
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
        {...getOverrideProps(overrides, "Frame 13981")}
      >
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
          {...getOverrideProps(overrides, "Frame 13979")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Evaluación Jefe Directo"
            {...getOverrideProps(overrides, "PerformanceCalibration39504660")}
          ></Text>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider39504662")}
          ></Divider>
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
            {...getOverrideProps(overrides, "Frame 1396539504665")}
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
              padding="8px 8px 8px 8px"
              backgroundColor="rgba(239,240,240,1)"
              display="flex"
              {...getOverrideProps(overrides, "Frame 460")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(0,0,0,0.8)"
                lineHeight="21px"
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
                children="Revisor"
                {...getOverrideProps(overrides, "Revisor39504667")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(0,0,0,0.8)"
                lineHeight="21px"
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
                children="Clasificación"
                {...getOverrideProps(overrides, "Clasificaci\u00F3n39504670")}
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
              padding="0px 8px 0px 8px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 46139504669")}
            >
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Nombre del jefe directo"
                {...getOverrideProps(overrides, "answerPeople39504746")}
              ></Text>
              <Flex
                gap="10px"
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
                {...getOverrideProps(overrides, "Frame 1397739504883")}
              >
                <RatingStars
                  display="flex"
                  gap="4px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  rating="five"
                  {...getOverrideProps(overrides, "RatingStars39504747")}
                ></RatingStars>
              </Flex>
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
            padding="0px 8px 0px 8px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 1396839504683")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="700"
              color="rgba(0,0,0,0.8)"
              lineHeight="21px"
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
              children="Comentarios"
              {...getOverrideProps(overrides, "Comentarios39504685")}
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
              children="Lorem ipsum dolor sit amet consectetur. Nunc cursus quis augue id elementum bibendum. Tortor tristique viverra cursus duis lacinia purus enim nisl at. Diam eu nec adipiscing fusce nunc. Ac at in blandit adipiscing. Suspendisse consequat etiam phasellus faucibus id rhoncus varius. Posuere ullamcorper tincidunt felis tristique scelerisque fermentum."
              {...getOverrideProps(overrides, "answerFeels39504689")}
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
          {...getOverrideProps(overrides, "Divider39504942")}
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
          {...getOverrideProps(overrides, "Frame 13980")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
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
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Evaluación de Reportes directos"
            {...getOverrideProps(overrides, "PerformanceCalibration39504914")}
          ></Text>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider39504915")}
          ></Divider>
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
            {...getOverrideProps(overrides, "Frame 1396539504916")}
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
              padding="8px 8px 8px 8px"
              backgroundColor="rgba(239,240,240,1)"
              display="flex"
              {...getOverrideProps(overrides, "Frame 464")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(0,0,0,0.8)"
                lineHeight="21px"
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
                children="Revisor"
                {...getOverrideProps(overrides, "Revisor39514553")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(0,0,0,0.8)"
                lineHeight="21px"
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
                children="Clasificación"
                {...getOverrideProps(overrides, "Clasificaci\u00F3n39514554")}
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
              padding="0px 8px 0px 8px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 46139504920")}
            >
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Nombre Colaborador 1"
                {...getOverrideProps(overrides, "answerPeople39504921")}
              ></Text>
              <Flex
                gap="10px"
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
                {...getOverrideProps(overrides, "Frame 1397739504922")}
              >
                <RatingStars
                  display="flex"
                  gap="4px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  rating="four"
                  {...getOverrideProps(overrides, "RatingStars39504923")}
                ></RatingStars>
              </Flex>
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
              padding="0px 8px 0px 8px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 462")}
            >
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Nombre Colaborador 2"
                {...getOverrideProps(overrides, "answerPeople39504945")}
              ></Text>
              <Flex
                gap="10px"
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
                {...getOverrideProps(overrides, "Frame 1397739504946")}
              >
                <RatingStars
                  display="flex"
                  gap="4px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  rating="four"
                  {...getOverrideProps(overrides, "RatingStars39504947")}
                ></RatingStars>
              </Flex>
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
              padding="0px 8px 0px 8px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 463")}
            >
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Nombre Colaborador 3"
                {...getOverrideProps(overrides, "answerPeople39504961")}
              ></Text>
              <Flex
                gap="10px"
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
                {...getOverrideProps(overrides, "Frame 1397739504962")}
              >
                <RatingStars
                  display="flex"
                  gap="4px"
                  direction="column"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  rating="four"
                  {...getOverrideProps(overrides, "RatingStars39504963")}
                ></RatingStars>
              </Flex>
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
            padding="0px 8px 0px 8px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 1396839504925")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="700"
              color="rgba(0,0,0,0.8)"
              lineHeight="21px"
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
              children="Comentarios"
              {...getOverrideProps(overrides, "Comentarios39504926")}
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
              children="Lorem ipsum dolor sit amet consectetur. Nunc cursus quis augue id elementum bibendum. Tortor tristique viverra cursus duis lacinia purus enim nisl at. Diam eu nec adipiscing fusce nunc. Ac at in blandit adipiscing. Suspendisse consequat etiam phasellus faucibus id rhoncus varius. Posuere ullamcorper tincidunt felis tristique scelerisque fermentum."
              {...getOverrideProps(overrides, "answerFeels39504927")}
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
              children="Lorem ipsum dolor sit amet consectetur. Nunc cursus quis augue id elementum bibendum. Tortor tristique viverra cursus duis lacinia purus enim nisl at. Diam eu nec adipiscing fusce nunc. Ac at in blandit adipiscing. Suspendisse consequat etiam phasellus faucibus id rhoncus varius. Posuere ullamcorper tincidunt felis tristique scelerisque fermentum."
              {...getOverrideProps(overrides, "answerFeels39505024")}
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
              children="Lorem ipsum dolor sit amet consectetur. Nunc cursus quis augue id elementum bibendum. Tortor tristique viverra cursus duis lacinia purus enim nisl at. Diam eu nec adipiscing fusce nunc. Ac at in blandit adipiscing. Suspendisse consequat etiam phasellus faucibus id rhoncus varius. Posuere ullamcorper tincidunt felis tristique scelerisque fermentum."
              {...getOverrideProps(overrides, "answerFeels39505025")}
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
              children="Lorem ipsum dolor sit amet consectetur. Nunc cursus quis augue id elementum bibendum. Tortor tristique viverra cursus duis lacinia purus enim nisl at. Diam eu nec adipiscing fusce nunc. Ac at in blandit adipiscing. Suspendisse consequat etiam phasellus faucibus id rhoncus varius. Posuere ullamcorper tincidunt felis tristique scelerisque fermentum."
              {...getOverrideProps(overrides, "answerFeels39505026")}
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
              children="Lorem ipsum dolor sit amet consectetur. Nunc cursus quis augue id elementum bibendum. Tortor tristique viverra cursus duis lacinia purus enim nisl at. Diam eu nec adipiscing fusce nunc. Ac at in blandit adipiscing. Suspendisse consequat etiam phasellus faucibus id rhoncus varius. Posuere ullamcorper tincidunt felis tristique scelerisque fermentum."
              {...getOverrideProps(overrides, "answerFeels39505027")}
            ></Text>
          </Flex>
        </Flex>
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
        {...getOverrideProps(overrides, "Frame 13974")}
      >
        <PDFDownloadLink
          document={
            <PDFComportamientos
              anios={anios}
              datosUsuario={datosUsuario}
            />
          }
          fileName={`Comportamientos_${anios}.pdf`}
        >
          <Button
            shrink="0"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Descargar PDF"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </PDFDownloadLink>
      </Flex>
    </Flex>
  );
}
