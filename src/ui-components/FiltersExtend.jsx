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
} from "./utils";
import { CheckboxField, Divider, Flex, Text } from "@aws-amplify/ui-react";
import List from "./List";
export default function FiltersExtend(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        FILTROS: {},
        "Frame 437": {},
        List34663366: {},
        CheckboxField34663393: {},
        CheckboxField34663408: {},
        CheckboxField34663416: {},
        "Frame 43834663424": {},
        "Frame 439": {},
        Divider: {},
        List35413245: {},
        CheckboxField35413247: {},
        CheckboxField35413248: {},
        CheckboxField35413249: {},
        "Frame 43835413246": {},
        "Frame 440": {},
        FiltersExtend: {},
      },
      variantValues: { selection: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="14px"
      direction="column"
      width="264px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="24px 12px 24px 12px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "FiltersExtend")}
      {...rest}
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
        padding="0px 12px 0px 12px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="500"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="FILTROS"
          {...getOverrideProps(overrides, "FILTROS")}
        ></Text>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 439")}
      >
        <List
          display="flex"
          gap="8px"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          name="up"
          {...getOverrideProps(overrides, "List34663366")}
        ></List>
        <Flex
          gap="8px"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 12px 0px 12px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 43834663424")}
        >
          <CheckboxField
            width="unset"
            height="unset"
            label="Puesto 1"
            shrink="0"
            alignSelf="stretch"
            size="small"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField34663393")}
          ></CheckboxField>
          <CheckboxField
            width="unset"
            height="unset"
            label="Puesto 2"
            shrink="0"
            alignSelf="stretch"
            size="small"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField34663408")}
          ></CheckboxField>
          <CheckboxField
            width="unset"
            height="unset"
            label="Puesto 3"
            shrink="0"
            alignSelf="stretch"
            size="small"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField34663416")}
          ></CheckboxField>
        </Flex>
      </Flex>
      <Divider
        width="unset"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 440")}
      >
        <List
          display="flex"
          gap="8px"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          name="up"
          {...getOverrideProps(overrides, "List35413245")}
        ></List>
        <Flex
          gap="8px"
          direction="column"
          width="240px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 12px 0px 12px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 43835413246")}
        >
          <CheckboxField
            width="unset"
            height="unset"
            label="Organización 1"
            shrink="0"
            alignSelf="stretch"
            size="small"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField35413247")}
          ></CheckboxField>
          <CheckboxField
            width="unset"
            height="unset"
            label="Organización 2"
            shrink="0"
            alignSelf="stretch"
            size="small"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField35413248")}
          ></CheckboxField>
          <CheckboxField
            width="unset"
            height="unset"
            label="Organización 3"
            shrink="0"
            alignSelf="stretch"
            size="small"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField35413249")}
          ></CheckboxField>
        </Flex>
      </Flex>
    </Flex>
  );
}
