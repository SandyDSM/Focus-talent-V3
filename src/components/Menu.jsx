/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "../ui-components/MyIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";


export default function Menu(props) {
  const { overrides, ...rest } = props;
  const { collaborators } = useContext(CollaboratorsContext);

  const colaboradores = collaborators.length;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="768px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="-2px 0px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Menu")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="275px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(84,131,232,1)"
        {...getOverrideProps(overrides, "Frame 415")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 484")}
        >
          <Image
            width="80px"
            height="80px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image 3")}
          ></Image>
          <Flex
            gap="0"
            direction="column"
            width="226px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 32137744291")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="NOMBRE COLABORADOR"
              {...getOverrideProps(overrides, "name")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="MANAGER HUMAN RELATIONS"
              {...getOverrideProps(overrides, "puesto")}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "ep:close-bold")}
        >
          <Icon
            width="15.71px"
            height="15.71px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15.7099609375,
              height: 15.710247039794922,
            }}
            paths={[
              {
                d: "M0.43918 0.43918C0.720471 0.157973 1.10193 0 1.49968 0C1.89743 0 2.27889 0.157973 2.56018 0.43918L7.86418 5.74318L13.1682 0.43918C13.4511 0.165942 13.83 0.0147509 14.2233 0.0181686C14.6166 0.0215862 14.9928 0.17934 15.2709 0.457452C15.549 0.735564 15.7068 1.11178 15.7102 1.50508C15.7136 1.89837 15.5624 2.27728 15.2892 2.56018L9.98518 7.86418L15.2892 13.1682C15.5624 13.4511 15.7136 13.83 15.7102 14.2233C15.7068 14.6166 15.549 14.9928 15.2709 15.2709C14.9928 15.549 14.6166 15.7068 14.2233 15.7102C13.83 15.7136 13.4511 15.5624 13.1682 15.2892L7.86418 9.98518L2.56018 15.2892C2.27728 15.5624 1.89837 15.7136 1.50508 15.7102C1.11178 15.7068 0.735564 15.549 0.457452 15.2709C0.17934 14.9928 0.0215862 14.6166 0.0181686 14.2233C0.0147509 13.83 0.165942 13.4511 0.43918 13.1682L5.74318 7.86418L0.43918 2.56018C0.157973 2.27889 0 1.89743 0 1.49968C0 1.10193 0.157973 0.720471 0.43918 0.43918L0.43918 0.43918Z",
                fill: "rgba(248,248,248,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17.23%"
            bottom="17.31%"
            left="17.23%"
            right="17.31%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </Flex>
      <Flex
        gap="32px"
        direction="column"
        width="275px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 32137744296")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "FrameTextos")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "FraHome")}
          >
            <Link to="/">
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
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
                children="Inicio"
                {...getOverrideProps(overrides, "Home")}
              ></Text>
            </Link>
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
            padding="0px 12px 0px 12px"
            {...getOverrideProps(overrides, "Subtemas")}
          >
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "FraTest")}
            >
              <Link to="/test">
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
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
                  children="Evaluaciones"
                  {...getOverrideProps(overrides, "Test")}
                ></Text>
              </Link>
            </Flex>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "FraTags")}
            >
              <Link to="/tags">
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
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
                  children="Etiquetas"
                  {...getOverrideProps(overrides, "Tags")}
                ></Text>
              </Link>
            </Flex>
            <Flex
              gap="16px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "FraNotif")}
            >
              <Link to="/notif">
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(13,26,38,1)"
                  lineHeight="24px"
                  textAlign="left"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  letterSpacing="0.01px"
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
                  children="Notificaciones"
                  {...getOverrideProps(overrides, "Notif")}
                ></Text>
              </Link>
            </Flex>
          </Flex>
        
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "FraTeam")}
          >
              {
            colaboradores > 0 ?

            (<Link to="/myteam">
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
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
                children="Mi equipo"
                {...getOverrideProps(overrides, "Team")}
              ></Text>
            </Link>) :
            (
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="D9D9D9"
                lineHeight="24px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0.01px"
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
                children="Mi equipo"
                {...getOverrideProps(overrides, "Team")}
              ></Text>)
            }
            </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 451")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cerrar"
            {...getOverrideProps(overrides, "Cerrar")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
