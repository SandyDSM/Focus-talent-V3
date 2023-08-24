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
import { Icon } from "@aws-amplify/ui-react";
export default function Star(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { Star: {} }, variantValues: { type: "default" } },
    {
      overrides: {
        Star: {
          paths: [
            {
              d: "M15.6652 18.5055C14.9719 18.9993 10.5239 15.8693 9.672 15.8624C8.8201 15.8556 4.32198 18.9136 3.63685 18.4087C2.95171 17.9039 4.56243 12.7183 4.30574 11.9083C4.04905 11.0983 -0.257615 7.77746 0.0121576 6.97169C0.28199 6.16592 5.7255 6.09107 6.41873 5.5973C7.11196 5.10359 8.94844 -0.00681322 9.8004 6.82e-06C10.6522 0.00688616 12.4058 5.14617 13.0909 5.65103C13.776 6.15584 19.2177 6.31833 19.4745 7.12831C19.7311 7.9383 15.3714 11.1894 15.1015 11.9952C14.8318 12.801 16.3584 18.0117 15.6652 18.5055Z",
              fill: "rgba(252,214,53,1)",
              fillRule: "nonzero",
              style: { transform: "translate(0%, 4.17%)" },
            },
          ],
        },
      },
      variantValues: { type: "active" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="20px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
      paths={[
        {
          d: "M15.6652 18.5055C14.9719 18.9993 10.5239 15.8693 9.672 15.8624C8.8201 15.8556 4.32198 18.9136 3.63685 18.4087C2.95171 17.9039 4.56243 12.7183 4.30574 11.9083C4.04905 11.0983 -0.257615 7.77746 0.0121576 6.97169C0.28199 6.16592 5.7255 6.09107 6.41873 5.5973C7.11196 5.10359 8.94844 -0.00681322 9.8004 6.82e-06C10.6522 0.00688616 12.4058 5.14617 13.0909 5.65103C13.776 6.15584 19.2177 6.31833 19.4745 7.12831C19.7311 7.9383 15.3714 11.1894 15.1015 11.9952C14.8318 12.801 16.3584 18.0117 15.6652 18.5055Z",
          fill: "rgba(239,240,240,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 4.17%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Star")}
      {...rest}
    ></Icon>
  );
}
