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
import { Loader } from "@aws-amplify/ui-react";

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
import PDFLiderazgo from "../PDFLiderazgo"

import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

export default function LiderazgoTest(props) {
  const {
    overrides: overridesProp,
    datosUsuario,
    anios,
    dataLiderazgo,
    cmtLiderazgo,
    load,
    ...restProp
  } = props;

  //console.log("los datos son",cmtLiderazgo);

  const {
    downloadPDF,
    noData,
    evalCompCol,
    evalCompJef,
    evalCompPar,
    titleCompLid,
    culturaGB,
    retroAlimentacion,
    califGeneral,
  } = useContext(CollaboratorsContext);

  const etiquetas = useContext(CollaboratorsContext);

  const encabezados = [
    evalCompCol,
    evalCompJef,
    evalCompPar,
  ];
  
  const filas = [
    { titulo: titleCompLid, indices: [1, 2, 3] },
    { titulo: culturaGB, indices: [4, 5, 6] }
  ];

  const thisYear = cmtLiderazgo.filter((c) => (c.ANIO_) === (anios));
  //console.log("L",titleCompLid)

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
  if (load) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Loader size="large" />
      </div>
    );
  }

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
              children={`${titleCompLid} ${anios}`}
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

        <div className="w-full">
          <div>
                <div>
                  <div className="flex gap-2 items-baseline">
                    <p>{califGeneral}</p>
                    <h2 className="text-xl font-bold ">{dataLiderazgo[0]?.RATING_}</h2>
                  </div>
                  <table className="table-fixed border-spacing-[7px] my-8 w-full ">
                    <thead className="text-left text-sm">
                      <tr>
                        <th className="border-b-2  border-gray-200"></th>
                        {encabezados.map((encabezado, i) => (
                          <th key={i} className="border-b-2 border-gray-200">{encabezado}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filas.map((fila, i) => (
                        <tr key={i} className="border-b-2 border-gray-200">
                          <td className="font-bold">{fila.titulo}</td>
                          {fila.indices.map((index) => (
                            <td key={index}>{dataLiderazgo[index]?.RATING_ ?? "-"}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="py-6"> 
                    <p className="font-bold">{retroAlimentacion}</p>
                  
                  {cmtLiderazgo?.map((dato, index) => (
                    <div key={index}>
                      
                    <p className="pt-4">{dato.ANSWER_}</p>
                    <p className="text-xs">{dato.RESPONSIBLE_}</p>
                    </div>
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
                          <PDFLiderazgo
                            DATOS={dataLiderazgo}
                            anios={anios}
                            datosUsuario={datosUsuario}
                            encabezados={encabezados}
                            filas={filas}
                            etiquetas={etiquetas}
                          />
                        }
                        fileName={`Competencias_de_Liderazgo_${anios}.pdf`}
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
                </div>
          </div>
        </div>
    </Flex>
  );
}
