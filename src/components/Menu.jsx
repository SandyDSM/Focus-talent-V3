/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction, } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "../ui-components/MyIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CollaboratorsContext from "../context/collaborators";

export default function Menu(props) {
  const { overrides, ...rest } = props;
  const { usuarioActualDatos } = useContext(CollaboratorsContext);
  const frameOneThreeNineEightTwoOnClick = useNavigateAction({
    type: "url",
    url: "https://grupobimbo.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1",
  });


  const colaboradores = usuarioActualDatos.EQUIPO;
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
          <Link to="/">
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
            </Flex>
          </Link>
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
            <Link to="/test">
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
              </Flex>
            </Link>
            <Link to="/tags">
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
              </Flex>
            </Link>
            <Link to="/notif">
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
              </Flex>
            </Link>
            <Link to="/permissions">
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
                {...getOverrideProps(overrides, "FraPermission")}
              >
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
                  children="Permisos de busqueda"
                  {...getOverrideProps(overrides, "Permission")}
                ></Text>
              </Flex>
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
            {...getOverrideProps(overrides, "FraTeam")}
          >
            {colaboradores > 0 ? (
              <Link to="/myteam">
                <Text
                  className={"hover:bg-sky-100"}
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
              </Link>
            ) : (
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="700"
                color="#D9D9D9"
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
            )}
          </Flex>
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
          onClick={() => {
            frameOneThreeNineEightTwoOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 13982")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
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
            children="GB Talent"
            {...getOverrideProps(overrides, "GB Talent")}
          ></Text>
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
            {...getOverrideProps(
              overrides,
              "material-symbols:keyboard-return-rounded"
            )}
          >
            <Icon
              width="17.58px"
              height="11.16px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.5751953125,
                height: 11.16351318359375,
              }}
              paths={[
                {
                  d: "M4.875 10.8885L0.275 6.2885C0.175 6.1885 0.104333 6.08017 0.063 5.9635C0.021 5.84683 0 5.72183 0 5.5885C0 5.45517 0.021 5.33017 0.063 5.2135C0.104333 5.09683 0.175 4.9885 0.275 4.8885L4.9 0.263502C5.08333 0.0801684 5.31233 -0.00749826 5.587 0.000501742C5.86233 0.00916841 6.09167 0.105168 6.275 0.288501C6.45833 0.471835 6.55 0.705168 6.55 0.988502C6.55 1.27183 6.45833 1.50517 6.275 1.6885L3.375 4.5885L15.575 4.5885L15.575 1.5885C15.575 1.30517 15.671 1.0675 15.863 0.875502C16.0543 0.684168 16.2917 0.588502 16.575 0.588502C16.8583 0.588502 17.0957 0.684168 17.287 0.875502C17.479 1.0675 17.575 1.30517 17.575 1.5885L17.575 5.5885C17.575 5.87183 17.479 6.10917 17.287 6.3005C17.0957 6.4925 16.8583 6.5885 16.575 6.5885L3.375 6.5885L6.3 9.5135C6.48333 9.69684 6.571 9.92583 6.563 10.2005C6.55433 10.4758 6.45833 10.7052 6.275 10.8885C6.09167 11.0718 5.85833 11.1635 5.575 11.1635C5.29167 11.1635 5.05833 11.0718 4.875 10.8885Z",
                  fill: "rgba(50,126,184,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="26.71%"
              bottom="26.77%"
              left="14.27%"
              right="12.5%"
              {...getOverrideProps(overrides, "Vector39704629")}
            ></Icon>
          </View>
        </Flex>

      </Flex>
    </Flex>
  );
}
