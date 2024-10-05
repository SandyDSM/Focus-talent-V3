/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Divider,
  Flex,
  Heading,
  PasswordField,
  Text,
} from "@aws-amplify/ui-react";
import TableSelect from "./TableSelect";
import Page2Arrow from "./Page2Arrow";
import PageArrow from "./PageArrow";
import Page from "./Page";
import TableDivision from "./TableDivision";
export default function ModalEstructuras(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="1232px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ModalEstructuras")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        level="5"
        children="Seleccionar la estructura organizacional a notificar"
        {...getOverrideProps(overrides, "Heading35593981")}
      ></Heading>
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
        {...getOverrideProps(overrides, "Frame 458")}
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
          {...getOverrideProps(overrides, "Frame 456")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            level="6"
            children="Busqueda"
            {...getOverrideProps(overrides, "Heading35593984")}
          ></Heading>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider35593985")}
          ></Divider>
        </Flex>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 455")}
        >
          <PasswordField
            width="unset"
            height="unset"
            label="Nombre"
            placeholder="Nombre"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={true}
            {...getOverrideProps(overrides, "PasswordField35593987")}
          ></PasswordField>
          <PasswordField
            width="unset"
            height="unset"
            label="ID"
            placeholder="ID"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={true}
            {...getOverrideProps(overrides, "PasswordField35593988")}
          ></PasswordField>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Buscar"
            {...getOverrideProps(overrides, "Button35593989")}
          ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 466")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="1184px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 461")}
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
            {...getOverrideProps(overrides, "Frame 45735593992")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              level="6"
              children="Estructuras seleccionadas"
              {...getOverrideProps(overrides, "Heading35593993")}
            ></Heading>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider35593994")}
            ></Divider>
          </Flex>
          <TableSelect
            display="flex"
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
            {...getOverrideProps(overrides, "TableSelect")}
          ></TableSelect>
          <Flex
            gap="2px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 43035593996")}
          >
            <Page2Arrow
              display="flex"
              gap="0"
              direction="row"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 10px 0px 10px"
              type="2Back"
              {...getOverrideProps(overrides, "Page2Arrow35593997")}
            ></Page2Arrow>
            <PageArrow
              display="flex"
              gap="10px"
              direction="column"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="10px 6px 10px 6px"
              type="Back"
              {...getOverrideProps(overrides, "PageArrow35593998")}
            ></PageArrow>
            <Page
              display="flex"
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 8px 0px 8px"
              type="active"
              {...getOverrideProps(overrides, "Page35593999")}
            ></Page>
            <Page
              display="flex"
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 8px 0px 8px"
              backgroundColor="rgba(188,211,228,1)"
              type="default"
              {...getOverrideProps(overrides, "Page35594000")}
            ></Page>
            <Page
              display="flex"
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 8px 0px 8px"
              backgroundColor="rgba(188,211,228,1)"
              type="default"
              {...getOverrideProps(overrides, "Page35594001")}
            ></Page>
            <PageArrow
              display="flex"
              gap="10px"
              direction="column"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              type="Go"
              {...getOverrideProps(overrides, "PageArrow35594002")}
            ></PageArrow>
            <Page2Arrow
              display="flex"
              gap="0"
              direction="row"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              type="2Go"
              {...getOverrideProps(overrides, "Page2Arrow35594003")}
            ></Page2Arrow>
          </Flex>
        </Flex>
        <Flex
          gap="12px"
          direction="column"
          width="1184px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 462")}
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
            {...getOverrideProps(overrides, "Frame 45735594005")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              level="6"
              children="Estructuras "
              {...getOverrideProps(overrides, "Heading35594006")}
            ></Heading>
            <Divider
              width="unset"
              height="1px"
              shrink="0"
              alignSelf="stretch"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider35594007")}
            ></Divider>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="2px"
              padding="2px 12px 2px 12px"
              backgroundColor="rgba(239,240,240,1)"
              {...getOverrideProps(overrides, "Frame 474")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(0,95,168,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="ORGANIZACION BIMBO BRASIL"
                {...getOverrideProps(overrides, "Status35633687")}
              ></Text>
              <PageArrow
                display="flex"
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="6px 4px 6px 4px"
                type="Go"
                {...getOverrideProps(overrides, "PageArrow35633688")}
              ></PageArrow>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(0,95,168,1)"
                textTransform="uppercase"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Organizacion BIM"
                {...getOverrideProps(overrides, "Status35633691")}
              ></Text>
              <PageArrow
                display="flex"
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="6px 4px 6px 4px"
                type="Go"
                {...getOverrideProps(overrides, "PageArrow35633692")}
              ></PageArrow>
              <Text
                fontFamily="Inter"
                fontSize="12px"
                fontWeight="400"
                color="rgba(0,95,168,1)"
                textTransform="uppercase"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                letterSpacing="0px"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Organizacion Bar"
                {...getOverrideProps(overrides, "Status35633693")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="2px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 464")}
          >
            <TableDivision
              display="flex"
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
              {...getOverrideProps(overrides, "TableDivision35594009")}
            ></TableDivision>
            <TableDivision
              display="flex"
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
              {...getOverrideProps(overrides, "TableDivision35594010")}
            ></TableDivision>
          </Flex>
          <Flex
            gap="2px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 43035594011")}
          >
            <Page2Arrow
              display="flex"
              gap="0"
              direction="row"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 10px 0px 10px"
              type="2Back"
              {...getOverrideProps(overrides, "Page2Arrow35594012")}
            ></Page2Arrow>
            <PageArrow
              display="flex"
              gap="10px"
              direction="column"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="10px 6px 10px 6px"
              type="Back"
              {...getOverrideProps(overrides, "PageArrow35594013")}
            ></PageArrow>
            <Page
              display="flex"
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 8px 0px 8px"
              type="active"
              {...getOverrideProps(overrides, "Page35594014")}
            ></Page>
            <Page
              display="flex"
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 8px 0px 8px"
              backgroundColor="rgba(188,211,228,1)"
              type="default"
              {...getOverrideProps(overrides, "Page35594015")}
            ></Page>
            <Page
              display="flex"
              gap="10px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 8px 0px 8px"
              backgroundColor="rgba(188,211,228,1)"
              type="default"
              {...getOverrideProps(overrides, "Page35594016")}
            ></Page>
            <PageArrow
              display="flex"
              gap="10px"
              direction="column"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              type="Go"
              {...getOverrideProps(overrides, "PageArrow35594017")}
            ></PageArrow>
            <Page2Arrow
              display="flex"
              gap="0"
              direction="row"
              width="34px"
              height="33px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              type="2Go"
              {...getOverrideProps(overrides, "Page2Arrow35594018")}
            ></Page2Arrow>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 463")}
      >
        <Button
          width="148px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancelar"
          {...getOverrideProps(overrides, "Button35594020")}
        ></Button>
        <Button
          width="159px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Enviar"
          {...getOverrideProps(overrides, "Button35594021")}
        ></Button>
      </Flex>
    </Flex>
  );
}
