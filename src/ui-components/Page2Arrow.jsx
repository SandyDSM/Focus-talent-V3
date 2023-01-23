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
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function Page2Arrow(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Vector35593185: {
          width: "6.28px",
          viewBox: { minX: 0, minY: 0, width: 6.275390625, height: 11 },
          paths: [
            {
              d: "M0.217391 10.7826C0.0724638 10.6377 0 10.4661 0 10.2678C0 10.07 0.0724638 9.89855 0.217391 9.75362L4.46377 5.50725L0.202898 1.24638C0.0676328 1.11111 0 0.942029 0 0.73913C0 0.536232 0.0724638 0.362319 0.217391 0.217391C0.362319 0.0724638 0.533913 0 0.732174 0C0.930048 0 1.10145 0.0724638 1.24638 0.217391L6.11594 5.10145C6.17391 5.15942 6.21507 5.22222 6.23942 5.28986C6.26338 5.35749 6.27536 5.42995 6.27536 5.50725C6.27536 5.58454 6.26338 5.657 6.23942 5.72464C6.21507 5.79227 6.17391 5.85507 6.11594 5.91304L1.23188 10.7971C1.09662 10.9324 0.930048 11 0.732174 11C0.533913 11 0.362319 10.9275 0.217391 10.7826Z",
              fill: "rgba(0,75,133,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Vector35593198: {
          width: "6.28px",
          viewBox: { minX: 0, minY: 0, width: 6.275390625, height: 11 },
          paths: [
            {
              d: "M0.217391 10.7826C0.0724638 10.6377 0 10.4661 0 10.2678C0 10.07 0.0724638 9.89855 0.217391 9.75362L4.46377 5.50725L0.202898 1.24638C0.0676328 1.11111 0 0.942029 0 0.73913C0 0.536232 0.0724638 0.362319 0.217391 0.217391C0.362319 0.0724638 0.533913 0 0.732174 0C0.930048 0 1.10145 0.0724638 1.24638 0.217391L6.11594 5.10145C6.17391 5.15942 6.21507 5.22222 6.23942 5.28986C6.26338 5.35749 6.27536 5.42995 6.27536 5.50725C6.27536 5.58454 6.26338 5.657 6.23942 5.72464C6.21507 5.79227 6.17391 5.85507 6.11594 5.91304L1.23188 10.7971C1.09662 10.9324 0.930048 11 0.732174 11C0.533913 11 0.362319 10.9275 0.217391 10.7826Z",
              fill: "rgba(0,75,133,1)",
              fillRule: "nonzero",
            },
          ],
        },
        Page2Arrow: { padding: "10px 0px 10px 0px" },
      },
      variantValues: { type: "2Go" },
    },
    {
      overrides: { Vector35593185: {}, Vector35593198: {}, Page2Arrow: {} },
      variantValues: { type: "2Back" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="23px"
      height="23px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 10px 0px 10px"
      display="flex"
      {...getOverrideProps(overrides, "Page2Arrow")}
      {...rest}
    >
      <Icon
        width="7px"
        height="11px"
        viewBox={{ minX: 0, minY: 0, width: 7, height: 11 }}
        paths={[
          {
            d: "M5.6129 10.7823L0.177419 5.90633C0.112903 5.84828 0.0673118 5.7854 0.0406452 5.71768C0.0135484 5.64996 0 5.5774 0 5.5C0 5.4226 0.0135484 5.35004 0.0406452 5.28232C0.0673118 5.2146 0.112903 5.15171 0.177419 5.09367L5.6129 0.203166C5.76344 0.067722 5.95161 0 6.17742 0C6.40323 0 6.59677 0.0725594 6.75806 0.217678C6.91935 0.362797 7 0.532102 7 0.725594C7 0.919085 6.91935 1.08839 6.75806 1.23351L2.01613 5.5L6.75806 9.76649C6.9086 9.90193 6.98387 10.0687 6.98387 10.2669C6.98387 10.4654 6.90323 10.6372 6.74194 10.7823C6.58065 10.9274 6.39247 11 6.17742 11C5.96237 11 5.77419 10.9274 5.6129 10.7823L5.6129 10.7823Z",
            fill: "rgba(92,102,112,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector35593185")}
      ></Icon>
      <Icon
        width="7px"
        height="11px"
        viewBox={{ minX: 0, minY: 0, width: 7, height: 11 }}
        paths={[
          {
            d: "M5.6129 10.7823L0.177419 5.90633C0.112903 5.84828 0.0673118 5.7854 0.0406452 5.71768C0.0135484 5.64996 0 5.5774 0 5.5C0 5.4226 0.0135484 5.35004 0.0406452 5.28232C0.0673118 5.2146 0.112903 5.15171 0.177419 5.09367L5.6129 0.203166C5.76344 0.067722 5.95161 0 6.17742 0C6.40323 0 6.59677 0.0725594 6.75806 0.217678C6.91935 0.362797 7 0.532102 7 0.725594C7 0.919085 6.91935 1.08839 6.75806 1.23351L2.01613 5.5L6.75806 9.76649C6.9086 9.90193 6.98387 10.0687 6.98387 10.2669C6.98387 10.4654 6.90323 10.6372 6.74194 10.7823C6.58065 10.9274 6.39247 11 6.17742 11C5.96237 11 5.77419 10.9274 5.6129 10.7823L5.6129 10.7823Z",
            fill: "rgba(92,102,112,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector35593198")}
      ></Icon>
    </Flex>
  );
}
