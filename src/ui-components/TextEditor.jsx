/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Heading,
  PasswordField,
  SelectField,
} from "@aws-amplify/ui-react";
import MenuTextEditor from "./MenuTextEditor";
export default function TextEditor(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="24px 48px 24px 48px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "TextEditor")}
      {...rest}
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
        {...getOverrideProps(overrides, "Frame 467")}
      >
        <Heading
          width="844px"
          height="unset"
          shrink="0"
          level="6"
          children="Crear notificación "
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 471")}
      >
        <PasswordField
          width="unset"
          height="unset"
          label="Título de la notificación"
          placeholder="Título"
          grow="1"
          shrink="1"
          basis="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={true}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
        <SelectField
          width="unset"
          height="unset"
          label="Idioma"
          placeholder="Selecciona el idioma"
          shrink="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="484px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(248,248,248,1)"
        {...getOverrideProps(overrides, "Frame 469")}
      >
        <MenuTextEditor
          display="flex"
          gap="12px"
          direction="row"
          width="951px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="2px"
          padding="8px 12px 8px 12px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "menu-TextEditor")}
        ></MenuTextEditor>
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
          {...getOverrideProps(overrides, "Button35595572")}
        ></Button>
        <Button
          width="159px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Guardar"
          {...getOverrideProps(overrides, "Button35595573")}
        ></Button>
      </Flex>
    </Flex>
  );
}
