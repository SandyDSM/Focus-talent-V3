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

  const thisYear = testPreguntas?.filter(
    (c) => c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios,
  );

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
          {(() => {
            const filtered = testPreguntas?.filter(
              (c) => c.CATEGORIA === "Potencial" && c.ANO_EVAL === anios,
            );

            // Si el año es menor a 2024, renderizar como antes (layout original sin agrupar)
            if (anios < 2024) {
              const agrupaciones = [
                { key: "Agilidad mental", direction: "row" },
                { key: "Agilidad de personas", direction: "row" },
                { key: "Consciencia de sí mismo", direction: "row" },
                { key: "Agilidad de cambio", direction: "col" },
                { key: "Agilidad de resultados", direction: "col" },
                {
                  key: "PREDICTOR DE LIDERAZGO: Maneja con eficacia la incertidumbre",
                  direction: "col",
                },
                {
                  key: "PREDICTOR DE LIDERAZGO: Se siente cómodo guiando y dirigiendo a otros",
                  direction: "col",
                },
                {
                  key: "PREDICTOR DE LIDERAZGO: Se enfoca en hacer crecer el negocio a través de otros",
                  direction: "col",
                },
                { key: "DESCARRILADOR: Cerrado", direction: "col" },
                { key: "DESCARRILADOR: Volátil", direction: "col" },
                { key: "DESCARRILADOR: Micro-gestión", direction: "col" },
                { key: "Promovible", direction: "row" },
                { key: "Escenario Futuro", direction: "row" },
                { key: "Riesgo de pérdida", direction: "row" },
                { key: "Mapa de potencial", direction: "row" },
                { key: "Fortalezas", direction: "col" },
                { key: "Áreas de oportunidad", direction: "col" },
                { key: "Acciones de desarrollo", direction: "col" },
              ];

              return agrupaciones.map(({ key, direction }) =>
                filtered
                  ?.filter((c) => c.AGRUPACION === key)
                  .map((pre, index) => (
                    <div
                      key={`${key}-${index}`}
                      className={`flex ${direction === "row" ? "flex-row items-center" : "flex-col items-start"} gap-3 w-full relative`}
                    >
                      <p className="text-base font-medium text-black/80 text-left whitespace-pre-wrap shrink-0">
                        {pre.TITULO}
                      </p>
                      <p className="text-sm font-normal text-black/80 text-left whitespace-pre-wrap flex-1">
                        {pre.VALORES}
                      </p>
                    </div>
                  )),
              );
            }

            // >= 2024: agrupar por CATEGORIA_ORDEN con dividers
            const grouped = filtered?.reduce((acc, pre) => {
              const key = pre.CATEGORIA_ORDEN;
              if (!acc[key]) acc[key] = [];
              acc[key].push(pre);
              return acc;
            }, {});

            return Object.entries(grouped || {}).map(
              ([categoriaOrden, preguntas], groupIndex) => (
                <div key={categoriaOrden} className="w-full">
                  {groupIndex !== 0 && (
                    <hr className="w-full border-t border-gray-300 my-4" />
                  )}

                  <div className="flex flex-col gap-3 w-full">
                    {preguntas.map((pre, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 w-full items-start"
                      >
                        <p className="w-full text-base font-medium text-black/80 text-left whitespace-pre-wrap">
                          {pre.TITULO}
                        </p>
                        <p className="w-full text-sm font-normal text-black/80 text-left whitespace-pre-wrap">
                          {pre.VALORES}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            );
          })()}

          {/* Botón de descarga PDF */}
          <div className="w-full flex justify-end py-2.5">
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
          </div>
        </div>
      ) : (
        <div className="w-full">
          <p>{noData}</p>
        </div>
      )}
    </Flex>
  );
}
